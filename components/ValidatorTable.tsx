import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AutoSizer, List, ListRowProps } from "react-virtualized";
import { Input } from "@/components/ui/input";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Skeleton } from "@/components/ui/skeleton";
import { getBeaconExplorerValidatorUrl, shortenAddress } from "@/utils/misc";

type ValidatorStatus = "active" | "inactive" | "slashed" | "exited" | "all";

interface ValidatorEntry {
  id: number;
  status: Exclude<ValidatorStatus, "all">;
  withdrawalAddress: string;
}

type ValidatorId = string;
type WithdrawalAddress = string;

interface FilterState {
  withdrawalAddress: WithdrawalAddress | "all";
  validatorId: ValidatorId | "all";
  status: ValidatorStatus;
}

const StatusSummary = ({
  count,
  icon,
  color,
}: {
  count: number;
  icon: string;
  color: string;
}) => (
  <span className={`${color} flex items-center gap-1`}>
    <span>{icon}</span>
    <span>{count}</span>
  </span>
);

function ValidatorTableSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-5 w-72 mt-1.5" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-16" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-10" />
          ))}
        </div>
        <Skeleton className="h-[400px]" />
      </CardContent>
    </Card>
  );
}

export function ValidatorTable({
  chain,
  loginId,
}: {
  chain: string;
  loginId: string;
}) {
  const [filter, setFilter] = useState<FilterState>({
    withdrawalAddress: "all",
    validatorId: "all",
    status: "all",
  });
  const { data: userData, isLoading } = useUserInfo(chain, loginId);

  // Flatten and transform data for easier filtering
  const allValidators = useMemo(() => {
    if (!userData) return [];

    const validators: ValidatorEntry[] = [];

    // Iterate over withdrawal addresses
    Object.entries(userData.validatorsByWithdrawal).forEach(
      ([address, statuses]) => {
        // Add inactive validators first
        statuses.inactiveIds.forEach((id) => {
          validators.push({
            id,
            status: "inactive",
            withdrawalAddress: address,
          });
        });

        // Then add active validators
        statuses.activeIds.forEach((id) => {
          validators.push({
            id,
            status: "active",
            withdrawalAddress: address,
          });
        });

        statuses.slashedIds.forEach((id) => {
          validators.push({
            id,
            status: "slashed",
            withdrawalAddress: address,
          });
        });

        statuses.exitedIds.forEach((id) => {
          validators.push({
            id,
            status: "exited",
            withdrawalAddress: address,
          });
        });
      }
    );

    return validators;
  }, [userData]);

  // Summary statistics
  const summary = useMemo(() => {
    if (!userData) return { byWithdrawal: [], total: 0 };

    const stats = Object.entries(userData.validatorsByWithdrawal).map(
      ([address, statuses]) => ({
        withdrawalAddress: address,
        total:
          statuses.activeIds.length +
          statuses.inactiveIds.length +
          statuses.slashedIds.length +
          statuses.exitedIds.length,
        active: statuses.activeIds.length,
        inactive: statuses.inactiveIds.length,
        slashed: statuses.slashedIds.length,
        exited: statuses.exitedIds.length,
      })
    );

    return {
      byWithdrawal: stats,
      total: stats.reduce((acc, curr) => acc + curr.total, 0),
    };
  }, [userData]);

  // Apply filters
  const filteredValidators = useMemo(() => {
    return allValidators.filter((validator) => {
      if (
        filter.withdrawalAddress !== "all" &&
        validator.withdrawalAddress !== filter.withdrawalAddress
      )
        return false;

      if (
        filter.validatorId !== "all" &&
        !validator.id.toString().includes(filter.validatorId)
      )
        return false;

      if (filter.status !== "all" && validator.status !== filter.status)
        return false;

      return true;
    });
  }, [allValidators, filter]);

  if (isLoading) return <ValidatorTableSkeleton />;
  if (!userData) return null;

  const getStatusColor = (status: Exclude<ValidatorStatus, "all">) => {
    switch (status) {
      case "active":
        return "text-green-600 dark:text-green-500";
      case "inactive":
        return "text-yellow-600 dark:text-yellow-500";
      case "slashed":
        return "text-red-600 dark:text-red-500";
      case "exited":
        return "text-gray-600 dark:text-gray-500";
    }
  };

  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    const validator = filteredValidators[index];
    if (!validator) return null;

    return (
      <div key={key} style={style} className="flex border-b hover:bg-muted/50">
        <div className="flex-1 p-4">
          <a
            href={`${getBeaconExplorerValidatorUrl(chain, validator.id)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 w-fit"
          >
            {validator.id}
            <span className="text-xs">↗</span>
          </a>
        </div>
        <div className={`flex-1 p-4 ${getStatusColor(validator.status)}`}>
          {validator.status}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Validators Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {summary.byWithdrawal.map((stat) => (
            <div
              key={stat.withdrawalAddress}
              className="p-4 rounded-lg border bg-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <span className="font-mono text-sm">
                {shortenAddress(stat.withdrawalAddress)}
              </span>
              <div className="flex flex-wrap gap-4">
                <StatusSummary
                  count={stat.active}
                  icon="🟢"
                  color="text-green-600 dark:text-green-500"
                />
                <StatusSummary
                  count={stat.inactive}
                  icon="🟡"
                  color="text-yellow-600 dark:text-yellow-500"
                />
                <StatusSummary
                  count={stat.slashed}
                  icon="🚫"
                  color="text-red-600 dark:text-red-500"
                />
                <StatusSummary
                  count={stat.exited}
                  icon="🔚"
                  color="text-gray-600 dark:text-gray-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            value={filter.withdrawalAddress}
            onValueChange={(value: WithdrawalAddress | "all") =>
              setFilter((prev) => ({
                ...prev,
                withdrawalAddress: value,
              }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by withdrawal address" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Addresses</SelectItem>
              {Object.keys(userData?.validatorsByWithdrawal || {}).map(
                (address) => (
                  <SelectItem key={address} value={address}>
                    {shortenAddress(address)}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>

          <Input
            placeholder="Filter by validator ID"
            value={filter.validatorId === "all" ? "" : filter.validatorId}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                validatorId: e.target.value || "all",
              }))
            }
          />

          <Select
            value={filter.status}
            onValueChange={(value: ValidatorStatus) =>
              setFilter((prev) => ({
                ...prev,
                status: value,
              }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="slashed">Slashed</SelectItem>
              <SelectItem value="exited">Exited</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Virtualized List */}
        <div className="border rounded-md">
          <div className="flex border-b bg-muted">
            <div className="flex-1 p-4 font-medium">Validator ID</div>
            <div className="flex-1 p-4 font-medium">Status</div>
          </div>
          <div style={{ height: "400px" }}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  rowCount={filteredValidators.length}
                  rowHeight={48}
                  rowRenderer={rowRenderer}
                  width={width}
                  overscanRowCount={5}
                />
              )}
            </AutoSizer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
