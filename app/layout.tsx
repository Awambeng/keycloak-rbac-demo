import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keycloak RBAC Demo",
  description: "Role-based access control with Keycloak and Auth.js in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#393939] text-gray-100 min-h-screen`}>
        <SessionProvider>
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-10">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
