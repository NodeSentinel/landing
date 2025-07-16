import { TelegramChat } from "@/components/TelegramMessage";

interface TelegramChatInstanceProps {
  chain: "ethereum" | "gnosis";
  messages: Array<{
    id: string;
    isBot: boolean;
    message: string;
    timestamp: string;
    withButton?: boolean;
    buttonText?: string;
  }>;
}

export default function TelegramChatInstance({
  chain,
  messages,
}: TelegramChatInstanceProps) {
  const avatarSrc =
    chain === "ethereum"
      ? "/images/tg-nodeSentinel-eth-avatar.png"
      : "/images/tg-nodeSentinel-gnosis-avatar.png";

  const botName = chain === "ethereum" ? "NodeSentinel" : "NodeSentinel";

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        {/* Telegram Header */}
        <div className="bg-white text-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={avatarSrc}
              alt={`${botName} Bot`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-semibold">{botName}</div>
            <div className="text-xs text-gray-500">bot</div>
          </div>
        </div>
        {/* Chat Area */}
        <div className="bg-gray-100">
          <TelegramChat messages={messages} />
        </div>
      </div>
    </div>
  );
}
