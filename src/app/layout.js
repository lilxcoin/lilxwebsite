import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";  // ✅ Ensures global styles are applied

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "$LILX - Born on Blockchain",
  description: "The future of crypto meets space innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* 🔥 Fix: Manually Inject Starfield in Layout for Testing */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        {children}
      </body>
    </html>
  );
}
