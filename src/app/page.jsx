import Image from "next/image";
import LinkButton from "@/components/link";

export default function Home() {
  return (
    <>
      <main>
        <article>
          <section className="py-8 px-4">
            <h1><Image src="/images/logo.png" alt="logo" width={1920} height={1080} className="object-cover w-full h-full" /></h1>
            <LinkButton href="app" addClass="mt-8">アプリ一覧</LinkButton>
          </section>
        </article>
      </main>
      <footer className="text-black md:text-white text-xl my-4">©第5回RUNTEQ祭運営</footer>
    </>
  );
}
