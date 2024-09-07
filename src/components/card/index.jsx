import Image from "next/image";
import LinkButton from "@/components/link";
import MarkdownComponent from "../markdown";

export default function Card({ name, type, twitterId, timesUrl, appName, appUrl, githubUrl, imgUrl, shortDescription, description }) {

  const userNames = name.split(",");

  let appType = "";
  switch (type) {
    case "miniapp":
      appType = "ミニアプリ";
      break;
    case "pf":
      appType = "ポートフォリオ";
      break;
    case "engineer":
      appType = "現役エンジニア";
      break;
    case "team":
      appType = "チーム開発";
      break;
  }

  return (
    <section className="p-4 md:w-[1000px] max-w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-center text-2xl">{appName}</h2>
        <div className="max-w-96 w-full">
          <Image src={imgUrl} alt={appName} width={1000} height={800} className="object-cover w-full h-full" />
        </div>
        <p className="flex justify-center items-center gap-2">{userNames.map((userName, i) => <span key={i}>{userName}</span>)}</p>
        <p className="bg-blue-500 bg-opacity-50 border border-blue-500 rounded-full text-sm text-white px-1">{appType}</p>
        <p>{shortDescription}</p>
        <hr />
        <div className="whitespace-pre-wrap w-full md:max-w-[600px]">
          <MarkdownComponent content={description} />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row-reverse">
          <LinkButton href={appUrl} target addLinkClass="px-4 py-2">サービス</LinkButton>
          <div className="flex justify-center items-center gap-4">
            {twitterId && <LinkButton href={`https://x.com/${twitterId}`} addLinkClass="px-4 py-2" target>X</LinkButton>}
            {timesUrl && <LinkButton href={timesUrl} addLinkClass="px-4 py-2" target>times</LinkButton>}
            {githubUrl && <LinkButton href={githubUrl} addLinkClass="px-4 py-2" target>GitHub</LinkButton>}
          </div>
        </div>
      </div>
    </section>
  )
}