"use client";

import { LoginButton, TelegramAuthData } from "@telegram-auth/react";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const handleAuth = (data: TelegramAuthData) => {
    alert(
      "Logged in as " +
        data.first_name +
        " " +
        data.last_name +
        " (" +
        data.id +
        (data.username ? ", @" + data.username : "") +
        ")"
    );
  };

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          <LoginButton
            botUsername="gbc_validators_bot"
            onAuthCallback={handleAuth}
            buttonSize="large"
          />
        </CardContent>
      </Card>
    </div>
  );
}
