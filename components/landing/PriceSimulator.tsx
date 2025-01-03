"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const BASE_PRICE = 0.075; // Base price per validator
const MAX_DISCOUNT = 0.8; // Adjusted maximum discount for higher validators
const MAX_VALIDATORS_FOR_DISCOUNT = 6000; // Maximum validators for discount

type DiscountResult =
  | { totalPrice: number; pricePerValidator: number; discount: number }
  | { totalPrice: "contact"; pricePerValidator: number; discount: number };

// Aggressively exponential discount function with enhanced rapid growth
const calculateExponentialDiscount = (validators: number): DiscountResult => {
  if (validators <= 30) {
    return { totalPrice: 0, pricePerValidator: 0, discount: 1 };
  }
  if (validators > MAX_VALIDATORS_FOR_DISCOUNT) {
    return {
      totalPrice: "contact" as const,
      pricePerValidator: 0,
      discount: 0,
    };
  }
  // Adjusting exponential growth to enhance discounts at higher validator counts
  const discountFactor = 1 - Math.exp(-0.0016 * validators); // Increased growth rate
  const discount = Math.min(discountFactor * MAX_DISCOUNT, MAX_DISCOUNT);
  const pricePerValidator = BASE_PRICE * (1 - discount);
  const totalPrice = pricePerValidator * validators;
  return { totalPrice: totalPrice as number, pricePerValidator, discount };
};

export default function PriceSimulator() {
  const [validators, setValidators] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [pricePerValidator, setPricePerValidator] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    const count = Number(validators);
    if (isNaN(count) || count <= 0) {
      setPrice(0);
      setPricePerValidator(0);
      setDiscount(0);
      return;
    }

    const { totalPrice, pricePerValidator, discount } =
      calculateExponentialDiscount(count);
    if (totalPrice === "contact") {
      setPrice("contact us");
      setPricePerValidator(0);
      setDiscount(0);
    } else {
      setPrice(Math.round(totalPrice * 100) / 100);
      setPricePerValidator(Math.round(pricePerValidator * 1000) / 1000);
      setDiscount(Math.round(discount * 100));
    }
  }, [validators]);

  return (
    <section id="priceSimulator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Price Simulator
        </h2>
        <div className="max-w-md mx-auto bg-card p-6 rounded-lg border border-border">
          <div className="mb-4">
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
              className="bg-white border-input text-foreground"
            />
          </div>
          {Number(validators) > 0 ? (
            <div className="mt-6 text-center space-y-2">
              {price === "contact us" ? (
                <p className="text-2xl font-bold text-foreground">
                  Contact us for pricing
                </p>
              ) : (
                <>
                  {price === 0 ? (
                    <p className="text-2xl font-bold text-foreground">
                      Free tier! (up to 30 validators)
                    </p>
                  ) : (
                    <>
                      <p className="text-2xl font-bold text-foreground">
                        USD ${price}/month
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ${pricePerValidator.toFixed(3)} per validator
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {`You're getting a ${discount}% discount!`}
                      </p>
                    </>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Enter the number of validators to see pricing
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
