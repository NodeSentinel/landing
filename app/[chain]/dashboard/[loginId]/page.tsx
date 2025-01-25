"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { PageContainer } from "@/components/ui/page-container";
import { InfiniteValidatorGrid } from "@/components/ui/infinite-validator-grid";
import { UserValidators } from "@/apiTypes";

function ValidatorSection({
  title,
  ids,
  status,
  chain,
}: {
  title: string;
  ids: number[];
  status: "active" | "inactive";
  chain: "gnosis" | "mainnet";
}) {
  if (ids.length === 0) return null;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium flex items-center justify-between w-full">
          {title}
          <span className="text-sm font-normal text-muted-foreground">
            {ids.length} validators
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <InfiniteValidatorGrid ids={ids} status={status} chain={chain} />
      </CardContent>
    </Card>
  );
}

function DashboardSkeleton() {
  return (
    <PageContainer>
      <div className="h-8 w-64 mb-6">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="space-y-6">
        {[...Array(2)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {[...Array(12)].map((_, j) => (
                  <Skeleton key={j} className="h-10" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}

function ErrorState({ error }: { error: Error }) {
  return (
    <PageContainer>
      <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Error</h2>
        <p>{error.message}</p>
      </div>
    </PageContainer>
  );
}

export default function DashboardPage({
  params,
}: {
  params: { loginId: string; chain: "gnosis" | "mainnet" };
}) {
  const {
    data: userData,
    error,
    isLoading,
  } = useQuery<UserValidators, Error>({
    queryKey: ["user", params.chain, params.loginId],
    queryFn: async () => {
      const res = await fetch(
        `/api/${params.chain}/user/${params.loginId}/validators`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      return res.json();
    },
  });

  if (isLoading) return <DashboardSkeleton />;
  if (error) return <ErrorState error={error} />;
  if (!userData) return null;

  return (
    <PageContainer>
      <h1 className="text-2xl font-bold mb-6">
        Dashboard for {userData.username}
      </h1>

      <div className="space-y-6">
        <ValidatorSection
          title="Inactive Validators"
          ids={userData.validatorStatuses.inactiveIds}
          status="inactive"
          chain={params.chain}
        />

        <ValidatorSection
          title="Active Validators"
          ids={userData.validatorStatuses.activeIds}
          status="active"
          chain={params.chain}
        />
      </div>
    </PageContainer>
  );
}
