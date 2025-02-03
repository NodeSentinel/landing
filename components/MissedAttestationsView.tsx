import { useState, useMemo } from "react";
import { format, differenceInMinutes } from "date-fns";
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
import { getBeaconExplorerValidatorUrl } from "@/utils/getBeaconExplorer";

interface ChartData {
  slot: number;
  validators: number;
  minutesAgo: number;
  label: string;
}

interface ChartClickData {
  activePayload?: Array<{
    payload: ChartData;
  }>;
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
          Validators: {payload[0].value}
        </p>
        <p className="text-popover-foreground">
          Slot: {payload[0].payload.slot}
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
            validators: 0,
          };
        }
        acc[item.slot].validators += 1;
        return acc;
      },
      {} as Record<
        number,
        { slot: number; timestamp: number; validators: number }
      >
    );

    // Convert to array and add minutesAgo
    return Object.values(groupedBySlot)
      .map((item) => {
        const timestamp = new Date(item.timestamp);
        const minutesAgo = differenceInMinutes(now, timestamp);

        return {
          slot: item.slot,
          validators: item.validators,
          minutesAgo,
          label: `${minutesAgo}m ago`,
        };
      })
      .sort((a, b) => a.slot - b.slot);
  }, [userData]);

  const selectedSlotValidators = useMemo(() => {
    if (!userData || !selectedSlot) return [];
    return userData.missedAttestations.filter(
      (item) => item.slot === selectedSlot
    );
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
          <CardDescription>
            Total missed attestations: {userData.missedAttestations.length}
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
            <CardTitle>Slot {selectedSlot} Details</CardTitle>
            <CardDescription>
              Time:{" "}
              {selectedSlotValidators.length > 0 &&
                format(
                  new Date(selectedSlotValidators[0].timestamp),
                  "MMM d, yyyy HH:mm:ss"
                )}
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
                      <TableHead>Attestation Delay</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedSlotValidators
                      .slice(0, displayedValidators)
                      .map((validator) => (
                        <TableRow key={validator.index}>
                          <TableCell>
                            <a
                              href={`${getBeaconExplorerValidatorUrl(
                                chain,
                                validator.index
                              )}#attestations`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {validator.index}
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
