import { useUserInfo } from "@/hooks/useUserInfo";
import { Skeleton } from "@/components/ui/skeleton";

function DashboardHeaderSkeleton() {
  return (
    <div className="h-9">
      <Skeleton className="h-full w-64" />
    </div>
  );
}

export function DashboardHeader({
  chain,
  loginId,
}: {
  chain: string;
  loginId: string;
}) {
  const { data: userData, isLoading } = useUserInfo(chain, loginId);

  if (isLoading) return <DashboardHeaderSkeleton />;
  if (!userData) return null;

  return (
    <h1 className="text-2xl font-bold">Dashboard for @{userData.username}</h1>
  );
}
