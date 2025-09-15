import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-gray-50/80 to-gray-100/80 backdrop-blur-xl">
      <div className="relative w-28 h-28">
        {/* Outer orbiting ring with gradient */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-orbit">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-80 shadow-[0_0_25px_rgba(0,255,255,0.8)]"></div>
        </div>

        {/* Middle pulsing ring */}
        <div className="absolute inset-4 border-4 border-transparent rounded-full animate-pulse-scale">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 opacity-70 shadow-[0_0_20px_rgba(128,0,255,0.7)]"></div>
        </div>

        {/* Inner rotating core */}
        <div className="absolute inset-8 border-2 border-transparent rounded-full animate-spin-fast">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 shadow-[0_0_15px_rgba(255,0,255,0.9)]"></div>
        </div>

        {/* Central glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(0,255,255,1),0_0_40px_rgba(255,0,255,0.8)] animate-pulse-glow"></div>
      </div>

      {/* Futuristic loading text */}
      <p className="absolute bottom-12 text-gray-700 font-medium text-xl tracking-wider animate-pulse-text">
        Loading...
      </p>
    </div>
  );
}
