import Link from "next/link";

export default function Custom404() {
  return(
    <>
      <h1>404 - Page Not Found (custom)</h1>

      <Link href={'/'}>Back home</Link>
    </>
  );
}