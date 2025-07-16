import { TelegramChat } from "@/components/TelegramMessage";

export default function AlertChat() {
  const alertMessages = [
    {
      id: "1",
      isBot: true,
      message: "⚠️ Some validators are not active!\n\n📊 Validators dashboard",
      timestamp: "5:25 PM",
      withButton: true,
      buttonText: "ok",
    },
    {
      id: "2",
      isBot: true,
      message:
        "⚠️ Your validators performance has fallen below the threshold of 90%! \n\n📊 Validators dashboard",
      timestamp: "5:25 PM",
      withButton: true,
      buttonText: "ok",
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
          <TelegramChat messages={alertMessages} />
        </div>
      </div>
    </div>
  );
}
