import { useQuery } from "@tanstack/react-query";
import { UserValidatorsInfo } from "@/apiTypes";

export function useUserInfo(chain: string, loginId: string) {
  return useQuery<UserValidatorsInfo>({
    queryKey: ["user-info", chain, loginId],
    queryFn: async () => {
      const res = await fetch(`/api/${chain}/user/${loginId}/validatorsInfo`);
      if (!res.ok) {
        throw new Error("Failed to fetch user info");
      }
      return res.json();
    },
  });
}
