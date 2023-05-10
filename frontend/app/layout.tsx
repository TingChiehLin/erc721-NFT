import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ERC721",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative">
      <body className={inter.className}>{children}</body>
      <footer className="w-full h-12 bg-sky-900 absolute bottom-0 flex justify-center items-center text-gray-300">
        erc-721
      </footer>
    </html>
  );
}
