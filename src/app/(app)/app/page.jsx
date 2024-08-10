import Cards from "@/components/cards";
import IndexHeadTag from "@/components/indexHeadTag";
import LinkButton from "@/components/link";
import { Suspense } from "react";

const Data = Array.from({ length: 9 }, (_, i) => ({
  appName: `アプリ名${i + 1}`,
  imageId: "1CBONSTvbOLSwPtinrlu8A6fU1VGwsR96",
  term: "52",
  name: "とぴ",
  shortDescription: "アプリの簡単な説明ダミーテキストダミーテキスト",
  description: "アプリの説明ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
  uuid: "1",
  url: "https://www.google.com",
  xUrl: "https://x.com",
  timesUrl: "https://chat.runteq.jp/runteq/channels/times_52a_nishina_kanae",
  githubUrl: "https://github.com",
}));

export default function App() {

  return (
    <article className="w-full md:mt-8">
      <Suspense fallback={<></>} >
        <IndexHeadTag />
      </Suspense>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {Data.map((data, i) => <Cards key={i} {...data} />)}
      </div>
      <section className="my-8">
        <h2 className="text-xl text-center my-4">投票フォームはこちら！</h2>
        <LinkButton href="" addLinkClass="px-8 py-4" >投票フォーム</LinkButton>
      </section>
    </article>);
}