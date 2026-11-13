import type { ReactNode } from "react";
import { Shape } from "./Shape";
import type { Shape as S, Tone } from "@/lib/content";

export function Section({
  id, n, title, shape, tone, children,
}: { id: string; n: string; title: string; shape: S; tone: Tone; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="rule py-16 sm:py-24">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12">
          <header className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <Shape shape={shape} tone={tone} className="size-6" />
              <span className="label">{n}</span>
            </div>
            <h2 id={`${id}-h`} className="mt-4 text-4xl font-extrabold leading-none tracking-tight">{title}</h2>
          </header>
          <div className="lg:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
