import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import NextProvider from "@/redux/NextProvider";
import Header from "@/components/layout components/Header";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CV-Builder With AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col flex-1 ",
          fontSans.variable
        )}
      >
        <NextProvider>
          <ClerkProvider>
            <Header />
            <div className="max-w-screen-2xl flex flex-col flex-1">
              {children}
            </div>
          </ClerkProvider>
        </NextProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
