import { useQuery } from "@tanstack/react-query";
import { UserInfo } from "@/apiTypes";
import { groupValidatorsByWithdrawalAddress } from "@/utils/groupValidatorsByWithdrawalAddress";

export function useUserInfo(chain: string, loginId: string) {
  return useQuery<UserInfo>({
    queryKey: ["user-info", chain, loginId],
    queryFn: async () => {
      const res = await fetch(`/api/${chain}/user/${loginId}/info`);
      if (!res.ok) {
        throw new Error("Failed to fetch user info");
      }
      return res.json();
    },
  });
}
