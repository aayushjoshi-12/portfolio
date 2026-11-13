import { readFile } from "node:fs/promises";
import path from "node:path";
import { education, experience, flagships, hackathons, site, skills, smaller } from "./content";

const profile = () => `# ${site.name}

> AI systems engineer in Haridwar, India. ${site.tagline} Open to full-time roles and freelance work.

## Contact

- Email: ${site.email}
- [GitHub](${site.github})
- [LinkedIn](${site.linkedin})
- Website: ${site.url}

## Skills

Strong: ${skills.strong.join("; ")}.

Working knowledge: ${skills.working.join("; ")}.

## Experience

${experience
  .map((e) => `- **${e.role}, ${e.org}** (${e.when}): ${e.body}${e.note ? " " + e.note : ""}`)
  .join("\n")}

## Hackathons

${hackathons.map((h) => `- **${h.title}**, ${h.where}: ${h.result}.${h.note ? " " + h.note : ""}`).join("\n")}

## Education

- ${education.degree}, ${education.school} (${education.when}), ${education.cgpa}.
`;

export function llmsTxt() {
  return `${profile()}
## Selected work

${flagships
  .map((p) => `- [${p.title}](${site.url}/work/${p.slug}): ${p.summary} (${p.status})`)
  .join("\n")}

## Optional

${smaller.map((s) => `- [${s.name}](${s.href}): ${s.note}`).join("\n")}
- [Full content in one file](${site.url}/llms-full.txt): this profile plus every case study.
`;
}

export async function llmsFullTxt() {
  const studies = await Promise.all(
    flagships.map(async (p) => {
      const body = await readFile(path.join(process.cwd(), "content/work", `${p.slug}.mdx`), "utf8");
      const repo = p.repo ? `\nRepository: ${p.repo}\n` : "";
      return `## Case study: ${p.title}\n\nStatus: ${p.status}. ${p.summary}${repo}\n${body.replace(/^## /gm, "### ")}`;
    }),
  );
  return `${profile()}\n${studies.join("\n")}`;
}
