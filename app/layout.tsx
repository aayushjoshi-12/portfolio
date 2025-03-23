import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sacramento } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const fontSacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aayush Joshi | Aspiring Machine Learning Engineer",
  description:
    "Aayush Joshi's portfolio - Showcasing skills in Python, machine learning, AI, LLMs, and more. Open to collaborations and opportunities.",
  keywords:
    "Aayush Joshi, Machine Learning Engineer, AI, Python, Portfolio, LLMs, PyTorch",
  authors: [{ name: "Aayush Joshi" }],
  robots: "index, follow",
  metadataBase: new URL("https://aayushjoshi.10xdevs.in"),
  alternates: {
    canonical: "/",
  },
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    url: "https://aayushjoshi.10xdevs.in",
    title: "Aayush Joshi | Aspiring Machine Learning Engineer",
    description:
      "Portfolio of Aayush Joshi, showcasing expertise in machine learning, AI, Python, and transformer models.",
    siteName: "Aayush Joshi Portfolio",
    images: [
      {
        url: "/images/og-laptop.png",
        width: 1360,
        height: 768,
        alt: "Aayush Joshi Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Joshi | Aspiring Machine Learning Engineer",
    description:
      "Portfolio of Aayush Joshi, showcasing expertise in machine learning, AI, Python, and transformer models.",
    images: ["/images/og-laptop.png"],
    creator: "@aayushjoshi_12",
  },
  other: {
    "linkedin:owner": "aayushjoshi1244",
    "linkedin:page_type": "article",
    "linkedin:title": "Aayush Joshi | Machine Learning & AI Engineer",
    "linkedin:description":
      "Passionate Machine Learning Engineer with expertise in Python, NLP, and transformer models. View my projects and expertise.",
    "linkedin:image": "https://aayushjoshi.10xdevs.in/images/og-laptop.png",
    "linkedin:author": "Aayush Joshi",
  },
  verification: {
    google: "google3e890796ae17d221.html",
  },
  category: "technology",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aayush Joshi",
  jobTitle: "Machine Learning Engineer",
  url: "https://aayushjoshi.10xdevs.in",
  sameAs: [
    "https://github.com/aayushjoshi-12",
    "https://www.linkedin.com/in/aayushjoshi1244",
    "https://medium.com/@aayushjoshi-12",
  ],
  description:
    "Aspiring Machine Learning Engineer with expertise in Python, AI, and Transformer models.",
  image: "https://aayushjoshi.10xdevs.in/images/og-laptop.png",
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Transformers",
    "LLMs",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Gurukul Kangri University",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Machine Learning Engineer  ",
    skills: "Python, PyTorch, TensorFlow, Transformers, NLP, Deep Learning",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://aayushjoshi.10xdevs.in",
  name: "Aayush Joshi | ML Engineer Portfolio",
  description:
    "Portfolio website of Aayush Joshi, an aspiring Machine Learning Engineer.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aayushjoshi.10xdevs.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={cn(
          "bg-black min-h-screen font-sans antialiased",
          fontSans.variable,
          fontSacramento.variable
        )}
      >
        <Breadcrumbs />
        {children}
      </body>
    </html>
  );
}
