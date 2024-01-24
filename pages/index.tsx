import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const buttonStyles =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-left";
  const inlineCodeStyles = "before:content-['`'] after:content-['`']";

  return (
    <main className="flex flex-col gap-4 max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold">Next.js Pages Router Redirects</h1>
      <Link className={buttonStyles} href="/middleware-redirect">
        Middleware Redirect
      </Link>
      <Link className={buttonStyles} href="/api/redirect">
        API Route Redirect
      </Link>
      <Link className={buttonStyles} href="/next-config-redirect">
        <code className={inlineCodeStyles}>next.config.js</code> Redirect
      </Link>
      <Link className={buttonStyles} href="/get-server-side-props-redirect">
        <code className={inlineCodeStyles}>getServerSideProps</code> Redirect
      </Link>
      <Link className={buttonStyles} href="/get-static-props-redirect">
        <code className={inlineCodeStyles}>getStaticProps</code> Redirect
      </Link>
      <button
        className={buttonStyles}
        type="button"
        onClick={() => router.push("https://nextjs.org")}
      >
        <code className={inlineCodeStyles}>router.push</code> Redirect
      </button>
      <button
        className={buttonStyles}
        type="button"
        onClick={() => window.location.assign("https://nextjs.org")}
      >
        <code className={inlineCodeStyles}>window.location.assign</code>{" "}
        Redirect
      </button>
    </main>
  );
}
