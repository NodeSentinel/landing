export type UserValidators = {
  username: string;
  validatorStatuses: {
    activeIds: number[];
    inactiveIds: number[];
    slashedIds: number[];
    exitedIds: number[];
  };
};

export type ActiveUsersValidators = {
  username: string;
  activeValidators: number;
};

// New types for health endpoint
export type HealthResponse = {
  status: "healthy" | "unhealthy";
  database: "connected" | "disconnected";
  timestamp: string;
};

// Token price endpoint
export type TokenPriceResponse = {
  price: number;
  timestamp: string;
};

// Pricing endpoints
export type PricingTierResponse = {
  minValidators: number;
  maxValidators: number;
  pricePerValidator: number;
  subscriptionPercentage: number;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyDiscount: number;
  yearlySavings: number;
};

export type PricingResponse = {
  tiers: PricingTierResponse[];
  tokenPrice: number;
  timestamp: string;
};

export type SpecificPricingResponse = PricingTierResponse & {
  tokenPrice: number;
  timestamp: string;
};

// Error responses
export type ErrorResponse = {
  error: string;
  timestamp: string;
};
