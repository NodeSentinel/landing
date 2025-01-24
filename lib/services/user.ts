export async function fetchUserData(
  chain: "gnosis" | "mainnet",
  loginId: string
) {
  const res = await fetch(`/api/${chain}/user/${loginId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}
