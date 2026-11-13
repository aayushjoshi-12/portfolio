import type { Metadata, Viewport } from "next";
import { Jost, Space_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/lib/content";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Aayush Joshi · AI systems engineer", template: "%s · Aayush Joshi" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, siteName: site.name, title: "Aayush Joshi · AI systems engineer", description: site.tagline },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ede1" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "AI systems engineer",
  address: { "@type": "PostalAddress", addressLocality: "Haridwar", addressCountry: "IN" },
  sameAs: [site.github, site.linkedin],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Gurukula Kangri" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="label absolute left-2 top-2 z-50 -translate-y-20 bg-ink px-3 py-2 text-paper focus:translate-y-0">
          Skip to content
        </a>
        <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
          <div className="wrap flex items-center justify-between gap-4 py-3">
            <Link href="/" className="label font-bold">Aayush Joshi</Link>
            <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
              <Link href="/#work" className="label hidden underline-offset-4 hover:underline sm:inline">Work</Link>
              <Link href="/#experience" className="label hidden underline-offset-4 hover:underline sm:inline">Experience</Link>
              <Link href="/#contact" className="label underline-offset-4 hover:underline">Contact</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="rule">
          <div className="wrap label flex flex-wrap justify-between gap-2 py-6">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <span>Haridwar, India</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
