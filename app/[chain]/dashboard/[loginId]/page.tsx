"use client";

import { PageContainer } from "@/components/ui/page-container";
import { MissedAttestationsView } from "@/components/MissedAttestationsView";
import { ValidatorTable } from "@/components/ValidatorTable";
import { DashboardHeader } from "@/components/DashboardHeader";

export default function DashboardPage({
  params,
}: {
  params: { loginId: string; chain: "gnosis" | "mainnet" };
}) {
  return (
    <PageContainer>
      <div className="mb-6">
        <DashboardHeader chain={params.chain} loginId={params.loginId} />
      </div>

      <div className="mb-6">
        <MissedAttestationsView chain={params.chain} loginId={params.loginId} />
      </div>

      <ValidatorTable chain={params.chain} loginId={params.loginId} />
    </PageContainer>
  );
}
