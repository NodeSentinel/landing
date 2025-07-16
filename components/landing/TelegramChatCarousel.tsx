"use client";

import TelegramChatInstance from "./TelegramChatInstance";

const ethereumMessage = {
  id: "1",
  isBot: true,
  message:
    "🟢 32 | 🟡 0 | 🚫 0 | 🔚 2\n\nLast 1h performance: 98.95%\nBal: 32.08 ETH $64,160\n Extra stats: web dashboard\n\n━━━━━━━━━━━━━━━━━\n     APY%   ETH    USD    Total\nd:  4.850     0.02    0.04    $40.00\nw:  5.131     0.15    0.30    $300.00\nm:  5.421     0.65    1.30    $1,300.00\n\nETH: $2,000.00\nUpdated: 07/16 12:05pm UTC",
  timestamp: "12:05",
};

const gnosisMessage = {
  id: "1",
  isBot: true,
  message:
    "🟢 170 | 🟡 0 | 🚫 0 | 🔚 9\n\nLast 1h performance: 99.74%\nBal: 170.03 GNO $21645\nClaimable: 0.91 GNO $116\nExtra stats: web dashboard \n━━━━━━━━━━━━━━━━━\n     APY%   GNO    xDAI    Total\nd:  5.305     0.02    0.01    $3.063\nw:  8.892     0.28    0.08    $35.36\nm:  collecting data\n\nGNO: $127.30\nUpdated: 06/11 11:32am UTC",
  timestamp: "12:05",
};

export default function TelegramChatCarousel() {
  return (
    <div className="w-full max-w-sm">
      <div className="transform hover:scale-105 transition-transform duration-1500 ease-in-out shadow-2xl rounded-2xl overflow-hidden">
        <div className="relative h-[400px] will-change-transform">
          {/* Ethereum Chat */}
          <div
            className="absolute inset-0 will-change-opacity will-change-transform will-change-filter"
            style={{
              animation: "fadeCycle 10s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <TelegramChatInstance
              chain="ethereum"
              messages={[ethereumMessage]}
            />
          </div>

          {/* Gnosis Chat */}
          <div
            className="absolute inset-0 will-change-opacity will-change-transform will-change-filter"
            style={{
              animation: "fadeCycle 10s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <TelegramChatInstance chain="gnosis" messages={[gnosisMessage]} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeCycle {
          /* fully visible up to 45% of the cycle */
          0%,
          95% {
            opacity: 1;
            transform: scale(1) translateZ(0);
            filter: blur(0);
          }
          /* fade-out between 45% → 50% (0.85s) */
          95%,
          100% {
            opacity: 0.1;
            transform: scale(0.95) translateZ(-5px);
            filter: blur(1px);
          }
        }
      `}</style>
    </div>
  );
}
