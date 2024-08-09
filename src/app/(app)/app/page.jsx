import Cards from "@/components/cards";

const Data = Array.from({ length: 9 }, (_, i) => ({
  appName: `アプリ名${i + 1}`,
  imageId: "1CBONSTvbOLSwPtinrlu8A6fU1VGwsR96",
  term: "52",
  name: "とぴ",
  shortDescription: "アプリの簡単な説明ダミーテキストダミーテキスト",
  uuid: "1",
  url: "https://www.google.com"
}));

export default function App() {
  return (
    <article className="w-full md:mt-8">
      <h1 className="text-center text-3xl" >- 全て -</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {Data.map((data, i) => <Cards key={i} {...data} />)}
      </div>
    </article>);
}