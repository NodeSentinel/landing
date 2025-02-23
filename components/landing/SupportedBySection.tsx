import Image from "next/image";
import Link from "next/link";

export default function SupportedBySection() {
  const supporters = [
    {
      name: "Obol RAF",
      logo: "/images/supportedBy/obol.png",
      url: "https://raf.obol.org/raf1/projects/0x589419c16e3701d9f405db497ec21221ac05487835ca35564dbca32ca799b02b",
    },
    {
      name: "Quicknode startup program",
      logo: "/images/supportedBy/quicknode.png",
      url: "https://www.quicknode.com/startup",
    },
    {
      name: "bootnode.dev",
      logo: "/images/supportedBy/bootnode.png",
      url: "https://bootnode.dev",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Supporters
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {supporters.map((supporter, index) => (
            <Link
              key={index}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={supporter.logo}
                alt={supporter.name}
                width={150}
                height={150}
                className="w-[150px] h-[150px] object-contain opacity-70 hover:opacity-100 transition duration-300"
              />
              {supporter.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
