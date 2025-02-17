"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center p-4 overflow-hidden">
      {/* 🔥 Starfield Background - Kept in layout.js */}
      <div className="absolute inset-0 z-0 stars"></div>
      <div className="absolute inset-0 z-0 stars2"></div>
      <div className="absolute inset-0 z-0 stars3"></div>

      {/* LOGO - Centered */}
      <div className="relative z-10">
        <Image
          src="/lilx_logo.png"
          alt="$LILX Logo"
          width={200}
          height={200}
          priority
          className="w-40 md:w-52 lg:w-64 mx-auto"
        />
      </div>

      {/* Centered Title */}
      <h1 className="text-4xl md:text-6xl font-bold neon-text z-10 mt-4">
        Welcome to <span className="text-[#60c9e5]">$LILX</span>
      </h1>
      <p className="mt-4 text-base md:text-lg text-gray-300 z-10">
        Born on Blockchain, Destined for the Stars.
      </p>

      {/* Centered Buttons */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 z-10">
        <a
          href="https://t.me/lilx_community"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-base md:text-lg font-semibold bg-[#dd2bc0] text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 w-64 text-center neon-glow"
        >
          🚀 Join the Community
        </a>
        <a
          href="https://www.canva.com/design/DAGfW99UwZs/VkZawMqHiITQTce1KYL5VQ/edit?utm_content=DAGfW99UwZs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-base md:text-lg font-semibold bg-[#60c9e5] text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 w-64 text-center neon-glow"
        >
          📜 View Whitepaper
        </a>
      </div>

      {/* 🔥 Styling Fix */}
      <style jsx>{`
        @keyframes pulse {
          0% { text-shadow: 0 0 5px #60c9e5, 0 0 10px #60c9e5; }
          50% { text-shadow: 0 0 15px #60c9e5, 0 0 30px #dd2bc0; }
          100% { text-shadow: 0 0 5px #60c9e5, 0 0 10px #60c9e5; }
        }

        .neon-text {
          animation: pulse 2s infinite alternate ease-in-out;
        }

        .neon-glow {
          box-shadow: 0 0 10px #60c9e5, 0 0 40px #dd2bc0;
        }
      `}</style>
    </main>
  );
}
