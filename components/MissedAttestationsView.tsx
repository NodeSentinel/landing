import { useState, useMemo } from "react";
import { differenceInMinutes } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Skeleton } from "@/components/ui/skeleton";
import { Modal } from "@/components/ui/modal";
import { X } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import {
  getBeaconExplorerValidatorUrl,
  getBeaconMaxAttestationDelay,
} from "@/utils/misc";
import { formatNumber, formatTime } from "@/lib/utils";

interface ChartData {
  slot: number;
  validators: number;
  minutesAgo: number;
  label: string;
  timestamp: number;
}

interface ChartClickData {
  activePayload?: Array<{
    payload: ChartData;
  }>;
}

interface SlotData {
  slot: number;
  timestamp: number;
  validators: number[];
}

const VALIDATORS_PER_PAGE = 20;

function MissedAttestationsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-7 w-56" />
        <Skeleton className="h-5 w-40 mt-1.5" />
      </CardHeader>
      <CardContent className="px-2">
        <Skeleton className="h-[300px] w-full" />
      </CardContent>
    </Card>
  );
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    payload: ChartData;
  }>;
  label?: string;
}) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-popover border rounded p-2 text-sm space-y-1">
        <p className="text-popover-foreground">
          <b>Slot: {formatNumber(payload[0].payload.slot)}</b>
        </p>
        <p className="text-popover-foreground font-mono">
          Time: {formatTime(payload[0].payload.timestamp)}
        </p>
        <p className="text-popover-foreground">
          Validators: {formatNumber(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

export function MissedAttestationsView({
  chain,
  loginId,
}: {
  chain: string;
  loginId: string;
}) {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [displayedValidators, setDisplayedValidators] =
    useState(VALIDATORS_PER_PAGE);
  const { data: userData, isLoading, error } = useUserInfo(chain, loginId);

  const chartData: ChartData[] = useMemo(() => {
    if (!userData) return [];

    const now = new Date();

    // Group attestations by slot
    const groupedBySlot = userData.missedAttestations.reduce(
      (acc, item) => {
        if (!acc[item.slot]) {
          acc[item.slot] = {
            slot: item.slot,
            timestamp: item.timestamp,
            validators: [],
          };
        }
        acc[item.slot].validators.push(item.validatorIndex);
        return acc;
      },
      {} as Record<number, SlotData>
    );

    // Convert to array and add minutesAgo
    return Object.values(groupedBySlot)
      .map((item) => {
        const timestamp = new Date(item.timestamp);
        const minutesAgo = differenceInMinutes(now, timestamp);

        return {
          slot: item.slot,
          validators: item.validators.length,
          minutesAgo,
          label: `${minutesAgo}m ago`,
          timestamp: item.timestamp,
        };
      })
      .sort((a, b) => a.slot - b.slot);
  }, [userData]);

  const selectedSlotValidators = useMemo(() => {
    if (!userData || !selectedSlot) return [];
    return userData.missedAttestations
      .filter((item) => item.slot === selectedSlot)
      .sort((a, b) => a.validatorIndex - b.validatorIndex);
  }, [userData, selectedSlot]);

  const loadMoreValidators = (): void => {
    setDisplayedValidators((prev) => prev + VALIDATORS_PER_PAGE);
  };

  const handleChartClick = (data: ChartClickData): void => {
    if (data.activePayload?.[0]?.payload) {
      setSelectedSlot(data.activePayload[0].payload.slot);
      setDisplayedValidators(VALIDATORS_PER_PAGE);
    }
  };

  if (isLoading) return <MissedAttestationsSkeleton />;
  if (error) return <div>Error loading data</div>;
  if (!userData) return null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Last 1h missed attestations</CardTitle>
          <CardDescription className="space-y-1">
            <div>
              Total missed attestations:{" "}
              {formatNumber(userData.missedAttestations.length)}
            </div>
            <div>
              A slot is considered missed if the validator attested after{" "}
              {getBeaconMaxAttestationDelay(chain)} slots.
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
                onClick={handleChartClick}
              >
                <XAxis
                  dataKey="label"
                  interval={0}
                  ticks={["60m ago", "45m ago", "30m ago", "15m ago", "0m ago"]}
                  tickFormatter={(value) => value.replace(" ago", "")}
                />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="validators"
                  fill="currentColor"
                  className="fill-primary hover:fill-primary/80"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Modal isOpen={!!selectedSlot} onClose={() => setSelectedSlot(null)}>
        <div className="relative">
          <button
            onClick={() => setSelectedSlot(null)}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <CardHeader>
            <CardTitle>Slot {formatNumber(selectedSlot!)} Details</CardTitle>
            <CardDescription className="space-y-1">
              <div>
                Time:{" "}
                {selectedSlotValidators.length > 0 &&
                  formatTime(selectedSlotValidators[0].timestamp)}
              </div>
              <div>
                Validators affected:{" "}
                {formatNumber(selectedSlotValidators.length)}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div id="scrollableDiv" className="max-h-[60vh] overflow-auto">
              <InfiniteScroll
                dataLength={displayedValidators}
                next={loadMoreValidators}
                hasMore={displayedValidators < selectedSlotValidators.length}
                loader={<Skeleton className="h-12 w-full my-2" />}
                scrollableTarget="scrollableDiv"
              >
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Validator ID</TableHead>
                      <TableHead>Delay / Missed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedSlotValidators
                      .slice(0, displayedValidators)
                      .map((validator) => (
                        <TableRow key={validator.validatorIndex}>
                          <TableCell>
                            <a
                              href={`${getBeaconExplorerValidatorUrl(
                                chain,
                                validator.validatorIndex
                              )}#attestations`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-1 w-fit"
                            >
                              {validator.validatorIndex}
                              <span className="text-xs">↗</span>
                            </a>
                          </TableCell>
                          <TableCell>
                            {validator.attestationDelay
                              ? `${validator.attestationDelay} slots`
                              : "missed"}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </InfiniteScroll>
            </div>
          </CardContent>
        </div>
      </Modal>
    </div>
  );
}
