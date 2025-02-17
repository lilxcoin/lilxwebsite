export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#dd2bc0] to-[#60c9e5] text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center">🚀 Welcome to $LILX</h1>
      <p className="mt-4 text-base md:text-lg text-gray-200 text-center">Born on Blockchain, Destined for the Stars.</p>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Join the Community Button */}
        <a
          href="https://t.me/lilx_community"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-base md:text-lg font-semibold bg-white text-[#dd2bc0] rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-auto text-center"
        >
          Join the Community
        </a>

        {/* Whitepaper Button */}
        <a
          href="https://www.canva.com/design/DAGfW99UwZs/VkZawMqHiITQTce1KYL5VQ/edit?utm_content=DAGfW99UwZs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-base md:text-lg font-semibold bg-white text-[#60c9e5] rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-auto text-center"
        >
          View Whitepaper
        </a>
      </div>
    </main>
  );
}
