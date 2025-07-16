import { TelegramChat } from "@/components/TelegramMessage";

export default function TelegramDemoSection() {
  const demoMessages = [
    {
      id: "1",
      isBot: true,
      message:
        "🟢 170 | 🟡 0 | 🚫 0 | 🔚 9\n\nLast 1h performance: 99.05%\nBal: 170.07 GNO $22615\nClaimable: 2.20 GNO $292\nExtra stats: web dashboard\n━━━━━━━━━━━━━━━━━\n     APY%   GNO    xDAI    Total\nd:  7.480     0.03    0.03    $4.465\nw:  8.131     0.25    0.05    $33.89\nm:  8.421     1.13    0.52    $150.6\n\nGNO: $132.98\nUpdated: 07/16 12:05pm UTC",
      timestamp: "12:05",
    },
    {
      id: "2",
      isBot: true,
      message: "⚠️ Some validators are not active!\n\n📊 Validators dashboard",
      timestamp: "5:25 PM",
      withButton: true,
      buttonText: "ok",
    },
    {
      id: "3",
      isBot: true,
      message:
        "⚠️ Your validators performance has fallen below the threshold of 90%! \n\n📊 Validators dashboard",
      timestamp: "5:25 PM",
      withButton: true,
      buttonText: "ok",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Notificaciones Inteligentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recibe alertas en tiempo real sobre el estado de tus validadores
            directamente en Telegram. Monitoreo 24/7 con notificaciones
            instantáneas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                🚨 Alertas en Tiempo Real
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Notificaciones instantáneas de incidentes críticos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Análisis detallado de causas y soluciones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Seguimiento de métricas de rendimiento
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Confirmación automática de recuperación
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                📊 Monitoreo Completo
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Uptime y performance tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Pérdidas de attestations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Estimaciones de pérdidas económicas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Recomendaciones de optimización
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
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
                  <TelegramChat messages={demoMessages} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
