import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col bg-card rounded-lg overflow-hidden border border-border">
            <div className="flex-1 relative min-h-[300px] md:min-h-[350px]">
              <Image
                src="/images/features/realTimeStats.png"
                alt="Real-time statistics monitoring"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Real-time Monitoring
              </h3>
              <p className="text-muted-foreground">
                Track your nodes performance in real-time
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-card rounded-lg overflow-hidden border border-border">
            <div className="flex-1 relative min-h-[300px] md:min-h-[350px]">
              <Image
                src="/images/features/notifications.png"
                alt="Intelligent alerts"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Intelligent Alerts
              </h3>
              <p className="text-muted-foreground">
                Receive instant notifications on critical issues
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-card rounded-lg overflow-hidden border border-border">
            <div className="flex-1 relative min-h-[300px] md:min-h-[350px]">
              <Image
                src="/images/features/dashboard.png"
                alt="Dashboard"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Performance Analytics
              </h3>
              <p className="text-muted-foreground">
                Historical incident reports, performance metrics, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
