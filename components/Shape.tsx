import type { Shape as S, Tone } from "@/lib/content";

export function Shape({ shape, tone, className = "" }: { shape: S; tone: Tone; className?: string }) {
  return <span aria-hidden className={`block shape-${shape} tone-${tone} ${className}`} />;
}
