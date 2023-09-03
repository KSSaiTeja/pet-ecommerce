"use client";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Modalprovider from "@/providers/modal-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Modalprovider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
