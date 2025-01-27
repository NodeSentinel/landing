"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { SpecificPricingResponse } from "@/apiTypes";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

async function fetchPrice(
  chain: string,
  validators: number
): Promise<SpecificPricingResponse> {
  const res = await fetch(
    `/api/${chain}/pricing/calculate?validators=${validators}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch price");
  }
  return res.json();
}

export default function PriceSimulator() {
  const [validators, setValidators] = useState<string>("");
  const [selectedChain, setSelectedChain] = useState<"gnosis" | "mainnet">(
    "gnosis"
  );

  const { data: priceData, isLoading } = useQuery({
    queryKey: ["price", selectedChain, validators],
    queryFn: () => fetchPrice(selectedChain, Number(validators)),
    enabled: Boolean(validators) && Number(validators) > 0,
  });

  const APR = 9.5;
  const isMainnet = selectedChain === "mainnet";
  const isFree = priceData?.monthlyPrice === 0;

  // Calcular rewards mensuales
  const calculateMonthlyRewards = (validators: number, tokenPrice: number) => {
    const totalStaked = validators * tokenPrice;
    const yearlyRewards = (totalStaked * APR) / 100;
    return yearlyRewards / 12;
  };

  return (
    <section
      id="priceSimulator"
      className="py-20 bg-gradient-to-b from-background to-background/80"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Price Simulator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate your monthly cost based on the number of validators you
            want to monitor
          </p>
        </div>

        <Card className="max-w-md mx-auto border-2 hover:border-primary/50 transition-colors duration-300">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="chain"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Chain
                </label>
                <Select
                  value={selectedChain}
                  onValueChange={(value: "gnosis" | "mainnet") =>
                    setSelectedChain(value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gnosis">Gnosis Chain</SelectItem>
                    <SelectItem value="mainnet">Ethereum Mainnet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="validators"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Number of Validators
                </label>
                <Input
                  type="number"
                  id="validators"
                  value={validators}
                  onChange={(e) => setValidators(e.target.value)}
                  className="bg-background/50 border-input text-foreground"
                  disabled={isMainnet}
                  min="0"
                  placeholder="Enter number of validators"
                />
              </div>
            </div>

            <div>
              {isMainnet ? (
                <div className="text-center">
                  <p className="text-lg font-semibold text-primary">
                    Coming soon to Ethereum Mainnet!
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  {isLoading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-8 w-32 mx-auto" />
                      <Skeleton className="h-4 w-24 mx-auto" />
                      <Skeleton className="h-4 w-28 mx-auto" />
                    </div>
                  ) : Number(validators) > 0 && priceData ? (
                    <>
                      {isFree ? (
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-emerald-600">
                            Free Tier
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Monitor up to 20 validators at no cost
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">
                              Plan for up to <b>{priceData.maxValidators}</b>{" "}
                              validators at{" "}
                              {`$${priceData.pricePerValidator} per validator`}
                            </p>
                            <p className="text-3xl font-bold text-foreground mb-2">
                              USD ${priceData.monthlyPrice}/month
                            </p>
                            <div className="bg-primary/10 py-2 px-4 rounded-full inline-block">
                              <p className="text-sm font-medium text-primary">
                                {/*  {`~${(
                                  priceData.subscriptionPercentage *
                                  (priceData.maxValidators / Number(validators))
                                ).toFixed(
                                  7
                                )}% of your ${validators}GNO staked value`} */}
                                {`~${(
                                  (priceData.monthlyPrice /
                                    calculateMonthlyRewards(
                                      Number(validators),
                                      priceData.tokenPrice
                                    )) *
                                  100
                                ).toFixed(2)}% of your monthly rewards`}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Enter the number of validators to see pricing
                    </p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
