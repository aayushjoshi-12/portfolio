  import type { Metadata } from "next";
  import { Plus_Jakarta_Sans, Sacramento } from "next/font/google";
  import "./globals.css";

  import { cn } from "@/lib/utils";
  import { Navbar } from "@/components/section";

  const fontSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans",
  });

  const fontSacramento = Sacramento({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-sacramento",
  });

  export const metadata: Metadata = {
    title: "Aayush Joshi",
    description: "My personal portfolio",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={cn("bg-black min-h-screen font-sans antialiased", fontSans.variable, fontSacramento.variable)}
        >
          <Navbar />
          {children}
        </body>
      </html>
    );
  }

