import Image from "next/image";
import LinkButton from "@/components/link";

export default function Home() {
  return (
    <main>
      <article>
        <section>
          <h1><Image src="/images/logo.png" alt="logo" width={1920} height={1080} /></h1>
          <LinkButton href="app">アプリ一覧</LinkButton>
        </section>
      </article>
    </main>
  );
}
