import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>You've been redirected to this page!</h1>

      <Link href={'/'}>Back home</Link>
    </div>
  );
}