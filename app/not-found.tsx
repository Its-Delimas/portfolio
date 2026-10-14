import Link from "next/link";
import { buttonClass, Footer, Nav } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="grid min-h-[70vh] place-items-center px-5 text-center">
        <div>
          <p className="font-brand text-8xl font-extrabold leading-none">404</p>
          <p className="mt-3 text-lg text-muted">Nothing lives here.</p>
          <Link href="/" className={buttonClass("primary", "lg") + " mt-8"}>
            Back to the work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
