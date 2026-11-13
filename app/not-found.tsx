import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-24">
      <p className="label">404</p>
      <h1 className="mt-4 text-6xl font-extrabold uppercase leading-none">Not found</h1>
      <p className="mt-6"><Link href="/" className="underline underline-offset-4">Back to the start</Link></p>
    </div>
  );
}
