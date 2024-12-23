import { Loader2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Loader2 className="w-24 h-24 mb-8 text-cyan-400 animate-spin" />
      <p className="text-xl text-center text-gray-300">
        We&apos; re working hard to bring you something amazing. Stay tuned!
      </p>
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-semibold mb-4 text-cyan-400 mb-1">
          Find this tool useful?
        </h1>
        <h2 className="text-xl mb-4 text-gray-300 mb-1">Support us!</h2>
        <div className="flex px-2 justify-center space-x-2">
          <svg
            className="w-6 h-6"
            viewBox="0 0 784.37 1277.39"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <polygon
                fill="#343434"
                fillRule="nonzero"
                points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
              />
              <polygon
                fill="#8C8C8C"
                fillRule="nonzero"
                points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
              />
              <polygon
                fill="#3C3C3B"
                fillRule="nonzero"
                points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
              />
              <polygon
                fill="#8C8C8C"
                fillRule="nonzero"
                points="392.07,1277.38 392.07,956.52 -0,724.89 "
              />
              <polygon
                fill="#141414"
                fillRule="nonzero"
                points="392.07,882.29 784.13,650.54 392.07,472.33 "
              />
              <polygon
                fill="#393939"
                fillRule="nonzero"
                points="0,650.54 392.07,882.29 392.07,472.33 "
              />
            </g>
          </svg>
          <span className="text-md text-gray-300 break-all">
            0x742d35Cc6634C0532925a3b844Bc454e4438f44e
          </span>
        </div>
      </div>
    </div>
  );
}
