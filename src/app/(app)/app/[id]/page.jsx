import Card from "@/components/card";

const Data = {
  appName: "アプリ名",
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
};

export default function AppShow() {

  return (
    <article className="w-full md:mt-8">
      <div className="w-full container">
        <Card {...Data} />
      </div>
    </article>);
}