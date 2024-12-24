import Image from "next/image";
import Link from "next/link";

export default function SupportedBySection() {
  const supporters = [
    {
      name: "BootNode",
      logo: "/images/supportedBy/bootnode.png",
      url: "https://bootnode.dev",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Backed By
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          {supporters.map((supporter, index) => (
            <Link
              key={index}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center items-center "
            >
              <Image
                src={supporter.logo}
                alt={supporter.name}
                width={150}
                height={75}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition duration-300"
              />
              {supporter.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
