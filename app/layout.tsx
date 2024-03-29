import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/client-providers";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Header from "@/components/header";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <ClientProviders session={session}>
      <html lang="en" className={twMerge("bg-background dark")} style={{ colorScheme: "dark" }}>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClientProviders>
  );
}
