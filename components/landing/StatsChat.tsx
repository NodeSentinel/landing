import { TelegramChat } from "@/components/TelegramMessage";

export default function StatsChat() {
  const statsMessages = [
    {
      id: "1",
      isBot: true,
      message:
        "🟢 170 | 🟡 0 | 🚫 0 | 🔚 9\n\nLast 1h performance: 99.05%\nBal: 170.07 GNO $22615\nClaimable: 2.20 GNO $292\nExtra stats: web dashboard\n━━━━━━━━━━━━━━━━━\n     APY%   GNO    xDAI    Total\nd:  7.480     0.03    0.03    $4.465\nw:  8.131     0.25    0.05    $33.89\nm:  8.421     1.13    0.52    $150.6\n\nGNO: $132.98\nUpdated: 07/16 12:05pm UTC",
      timestamp: "12:05",
    },
  ];

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        {/* Telegram Header */}
        <div className="bg-white text-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/tg-nodeSentinel-avatar.png"
              alt="NodeSentinel Bot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-semibold">NodeSentinel</div>
            <div className="text-xs text-gray-500">bot</div>
          </div>
        </div>
        {/* Chat Area */}
        <div className="bg-gray-100">
          <TelegramChat messages={statsMessages} />
        </div>
      </div>
    </div>
  );
}
