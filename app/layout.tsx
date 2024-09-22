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
    title: "Aayush Joshi | Aspiring Machine Learning Engineer",
    description:
      "Aayush Joshi's portfolio - Showcasing skills in Python, machine learning, AI, LLMs, and more. Open to collaborations and opportunities.",
    keywords:
      "Aayush Joshi, Machine Learning Engineer, AI, Python, Portfolio, LLMs, PyTorch",
    authors: [{ name: "Aayush Joshi" }],
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://your-vercel-domain.com",
      title: "Aayush Joshi | Aspiring Machine Learning Engineer",
      description:
        "Portfolio of Aayush Joshi, showcasing expertise in machine learning, AI, Python, and transformer models.",
      images: [
        {
          url: "/images/og-laptop.png",
          width: 1360,
          height: 768,
          alt: "Aayush Joshi Portfolio",
        },
      ],
    },
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <head>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aayush Joshi",
              "jobTitle": "Machine Learning Engineer",
              "url": "https://aayushjoshi-12.vercel.app",
              "sameAs": [
                "https://github.com/aayushjoshi-12",
                "https://www.linkedin.com/in/aayushjoshi1244",
                "https://medium.com/@aayushjoshi-12"
              ],
              "description": "Aspiring Machine Learning Engineer with expertise in Python, AI, and Transformer models.",
              "image": "/images/og-laptop.png"
            }
            `}
          </script>
        </head>
        <body
          className={cn(
            "bg-black min-h-screen font-sans antialiased",
            fontSans.variable,
            fontSacramento.variable
          )}
        >
          <Navbar />
          {children}
        </body>
      </html>
    );
  }
