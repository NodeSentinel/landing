"use client";

import Script from "next/script";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

declare global {
  interface Window {
    onTelegramAuth: (user: {
      first_name: string;
      last_name: string;
      id: number;
      username: string;
    }) => void;
  }
}

export default function LoginPage() {
  useEffect(() => {
    window.onTelegramAuth = (user) => {
      alert(
        "Logged in as " +
          user.first_name +
          " " +
          user.last_name +
          " (" +
          user.id +
          (user.username ? ", @" + user.username : "") +
          ")"
      );
    };
  }, []);

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          <Script
            src="https://telegram.org/js/telegram-widget.js?22"
            data-telegram-login="gbc_validators_bot"
            data-size="large"
            data-onauth="onTelegramAuth(user)"
          />
        </CardContent>
      </Card>
    </div>
  );
}
