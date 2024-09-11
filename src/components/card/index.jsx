import Image from "next/image";
import LinkButton from "@/components/link";
import MarkdownComponent from "../markdown";

export default function Card({ name, type, twitterId, timesUrl, appName, appUrl, githubUrl, imgUrl, shortDescription, description, team_name, team_twitter, team_times }) {

  const userNames = name.split(",");
  const teamTwitters = team_twitter?.split(",");
  const teamTimes = team_times?.split(",");

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
        {team_name && <p className="">チーム名: {team_name}</p>}
        <p className="flex flex-wrap justify-center items-center gap-2">{userNames.map((userName, i) => <span key={i}>{userName}</span>)}</p>
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
        {teamTwitters[0] && (
          <>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap gap-2 justify-center items-center">
              {teamTwitters.map((twitter, i) => <LinkButton key={i} href={`https://x.com/${twitter.split("/")[1]}`} addLinkClass="w-full px-4 py-2 text-center" target>{twitter.split("/")[0]}さんのX</LinkButton>)}
            </div>
          </>
        )}
        {teamTimes[0] &&
          <>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap gap-2 justify-center items-center">
              {teamTimes.map((times, i) => <LinkButton key={i} href={`https://chat.runteq.jp/runteq/channels/${times.split("/")[1]}`} addLinkClass="w-full px-4 py-2 text-center" target>{times.split("/")[0]}さんのtimes</LinkButton>)}
            </div>
          </>
        }
      </div>
    </section>
  )
}