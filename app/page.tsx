import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Shape } from "@/components/Shape";
import { education, experience, flagships, hackathons, site, skills, smaller } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-h" className="wrap grid gap-10 py-14 sm:py-24 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="label settle" style={{ ["--i" as string]: 0 }}>AI systems engineer · Haridwar, India</p>
          <h1 id="hero-h" translate="no" className="settle mt-5 text-[clamp(3.5rem,11vw,8.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em]" style={{ ["--i" as string]: 1 }}>
            Aayush<br />Joshi
          </h1>
          <p className="settle mt-10 max-w-xl text-2xl font-medium leading-snug" style={{ ["--i" as string]: 2 }}>
            {site.tagline}
          </p>
          <p className="settle mt-4 max-w-xl text-muted" style={{ ["--i" as string]: 3 }}>
            Agents, retrieval and MCP. Open to full-time roles and freelance work.
          </p>
          <div className="settle mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 4 }}>
            <a href={`mailto:${site.email}`} className="label lift box bg-ink px-5 py-3 text-paper">Email Me</a>
            <a href={site.github} className="label lift box px-5 py-3">GitHub</a>
            <a href={site.linkedin} className="label lift box px-5 py-3">LinkedIn</a>
          </div>
        </div>
        <div aria-hidden className="settle relative mx-auto aspect-square w-full max-w-md md:col-span-5" style={{ ["--i" as string]: 3 }}>
          <div className="box absolute inset-0" />
          <Shape shape="circle" tone="red" className="absolute left-[8%] top-[8%] size-[58%]" />
          <Shape shape="square" tone="blue" className="absolute bottom-[8%] right-[8%] size-[46%]" />
          <Shape shape="triangle" tone="yellow" className="absolute bottom-[8%] left-[14%] size-[38%]" />
          <span className="absolute right-[10%] top-[10%] h-[2px] w-[28%] bg-ink" />
          <span className="absolute right-[10%] top-[10%] h-[28%] w-[2px] bg-ink" />
        </div>
      </section>

      <Section id="work" n="01" title="Selected Work" shape="circle" tone="red">
        <ul className="grid gap-6 sm:grid-cols-2">
          {flagships.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="lift box block h-full bg-paper p-6">
                <div className="flex items-center justify-between">
                  <Shape shape={p.shape} tone={p.tone} className="size-10" />
                  <span className="label">{p.n} · {p.status}</span>
                </div>
                <h3 translate="no" className="mt-6 text-3xl font-extrabold leading-tight">{p.title}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <p className="label mt-5">{p.tags.join(" / ")}</p>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="label mt-14">Smaller Things</h3>
        <ul className="mt-4 border-t-2 border-ink">
          {smaller.map((s) => (
            <li key={s.name} className="border-b-2 border-ink">
              <a href={s.href} className="grid gap-1 py-4 hover:bg-paper-2 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <span translate="no" className="font-mono font-bold">{s.name}</span>
                <span className="text-muted">{s.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" n="02" title="Experience" shape="square" tone="blue">
        <ol className="border-t-2 border-ink">
          {experience.map((e) => (
            <li key={e.role + e.when} className="grid gap-2 border-b-2 border-ink py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <p className="label">{e.when}</p>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight">{e.role}, {e.org}</h3>
                <p className="mt-2">{e.body}</p>
                {e.note && <p className="mt-2 text-muted">{e.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" n="03" title="Skills" shape="triangle" tone="yellow">
        <h3 className="label">Strong</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {skills.strong.map((s) => <li key={s} className="box tone-yellow px-3 py-1.5 font-medium">{s}</li>)}
        </ul>
        <h3 className="label mt-8">Working Knowledge</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {skills.working.map((s) => <li key={s} className="box px-3 py-1.5 font-medium">{s}</li>)}
        </ul>
      </Section>

      <Section id="hackathons" n="04" title="Hackathons" shape="circle" tone="blue">
        <div className="grid gap-12">
          {hackathons.map((h) => (
            <article key={h.title}>
              <h3 className="text-3xl font-extrabold leading-tight">{h.title}</h3>
              <p className="label mt-2">{h.where} · {h.result}</p>
              {h.note && <p className="mt-2 text-muted">{h.note}</p>}
              <ul className="mt-5 grid grid-cols-2 gap-4">
                {h.photos.map((p) => (
                  <li key={p.src} className="photo box overflow-hidden">
                    <Image src={p.src} width={p.w} height={p.h} alt={p.alt} sizes="(min-width: 768px) 28rem, 50vw" className="aspect-[4/5] h-auto w-full object-cover" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" n="05" title="Education" shape="square" tone="red">
        <p className="text-2xl font-extrabold leading-tight">{education.degree}</p>
        <p className="mt-2">{education.school}</p>
        <p className="label mt-2">{education.when} · {education.cgpa.replace(" ", "\u00a0")}</p>
      </Section>

      <section id="contact" aria-labelledby="contact-h" className="border-t-2 border-ink bg-ink text-paper">
        <div className="wrap py-16 sm:py-24">
          <h2 id="contact-h" className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]">
            Let&rsquo;s build<br />something reliable.
          </h2>
          <p className="mt-6 max-w-xl text-lg opacity-90">Full-time roles and freelance projects. Email is the fastest way to reach me.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="label bg-yellow px-5 py-3 font-bold text-[#151515]">{site.email}</a>
            <a href={site.github} className="label border-2 border-paper px-5 py-3">GitHub</a>
            <a href={site.linkedin} className="label border-2 border-paper px-5 py-3">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
