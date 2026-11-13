import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shape } from "@/components/Shape";
import { flagships } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return flagships.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = flagships.find((f) => f.slug === slug);
  if (!p) return {};
  const title = `${p.title} · case study`;
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { type: "article", url: `/work/${slug}`, title, description: p.summary },
    twitter: { card: "summary_large_image", title, description: p.summary },
  };
}

export default async function Work({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = flagships.find((f) => f.slug === slug);
  if (!p) notFound();
  const { default: Body } = await import(`@/content/work/${slug}.mdx`);

  return (
    <article className="wrap py-14 sm:py-20">
      <Link href="/#work" className="label underline underline-offset-4">← All work</Link>
      <div className="mt-8 flex items-center gap-4">
        <Shape shape={p.shape} tone={p.tone} className="size-12" />
        <span className="label">{p.n} · {p.status}</span>
      </div>
      <h1 className="mt-4 text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.02em]">{p.title}</h1>
      <p className="mt-4 max-w-2xl text-xl text-muted">{p.summary}</p>
      <p className="label mt-4">{p.tags.join(" / ")}</p>
      {p.repo && (
        <p className="mt-6">
          <a href={p.repo} className="label lift box inline-block px-5 py-3">View the repo</a>
        </p>
      )}
      <div className="prose-work mt-10"><Body /></div>
    </article>
  );
}
