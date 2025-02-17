export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#dd2bc0] to-[#60c9e5] text-white">
      <h1 className="text-6xl font-bold">🚀 Welcome to $LILX</h1>
      <p className="mt-4 text-lg text-gray-200">Born on Blockchain, Destined for the Stars.</p>
      
      <div className="mt-6 flex space-x-4">
        {/* Join the Community Button */}
        <a
          href="https://t.me/lilx_community"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold bg-white text-[#dd2bc0] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          Join the Community
        </a>

        {/* Whitepaper Button */}
        <a
          href="https://www.canva.com/design/DAGfW99UwZs/VkZawMqHiITQTce1KYL5VQ/edit?utm_content=DAGfW99UwZs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold bg-white text-[#60c9e5] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          View Whitepaper
        </a>
      </div>
    </main>
  );
}
