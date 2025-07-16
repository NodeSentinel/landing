import { cn } from "@/lib/cn";

interface TelegramMessageProps {
  isBot?: boolean;
  message: string;
  timestamp?: string;
  className?: string;
  withButton?: boolean;
  buttonText?: string;
}

export default function TelegramMessage({
  isBot = false,
  message,
  timestamp,
  className,
  withButton = false,
  buttonText,
}: TelegramMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full mb-2",
        message.toLowerCase() === "ok"
          ? "justify-center"
          : isBot
            ? "justify-start"
            : "justify-end",
        className
      )}
    >
      {message.toLowerCase() === "ok" ? (
        <div className="w-auto px-6 py-2 bg-green-500 text-white font-semibold text-center rounded-lg shadow-md hover:bg-green-600 transition-colors cursor-pointer">
          {message}
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <div
            className={cn(
              "px-3 py-2 rounded-2xl",
              isBot
                ? "bg-white text-gray-800 shadow-sm"
                : "bg-blue-500 text-white"
            )}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                {message
                  .split("web dashboard")
                  .map((part, index, array) => {
                    if (index === array.length - 1) {
                      return part;
                    }
                    return (
                      <span key={index}>
                        {part}
                        <span className="text-blue-600 underline cursor-pointer">
                          web dashboard
                        </span>
                      </span>
                    );
                  }).map((part) => {
                    if (typeof part === 'string') {
                      return part.split("Validators dashboard").map((subPart, subIndex, subArray) => {
                        if (subIndex === subArray.length - 1) {
                          return subPart;
                        }
                        return (
                          <span key={subIndex}>
                            {subPart}
                            <span className="text-blue-600 underline cursor-pointer">
                              Validators dashboard
                            </span>
                          </span>
                        );
                      });
                    }
                    return part;
                  })}
              </p>
              {!isBot && timestamp && (
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-blue-100">{timestamp}</span>
                </div>
              )}
            </div>
          </div>
          {withButton && buttonText && (
            <div className="mt-2 w-full">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-center rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-200 cursor-pointer border border-green-400/30">
                {buttonText}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface TelegramChatProps {
  messages: Array<{
    id: string;
    isBot: boolean;
    message: string;
    timestamp?: string;
    withButton?: boolean;
    buttonText?: string;
  }>;
  className?: string;
}

export function TelegramChat({ messages, className }: TelegramChatProps) {
  return (
    <div
      className={cn("max-h-96 overflow-y-auto relative", className)}
      style={{
        background: `linear-gradient(135deg, #dbddbb 0%, #6ba587 33%, #d5d88d 66%, #88b884 100%), url('/images/tg-pattern.svg')`,
        backgroundRepeat: "no-repeat, repeat",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "url('/images/tg-pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskSize: "cover",
          maskPosition: "center",
          height: "150%",
          top: "-25%",
          margin: "0",
        }}
      />
      <div className="p-2 space-y-1 relative z-10">
        {messages.map((msg) => (
          <TelegramMessage
            key={msg.id}
            isBot={msg.isBot}
            message={msg.message}
            timestamp={msg.timestamp}
            withButton={msg.withButton}
            buttonText={msg.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
