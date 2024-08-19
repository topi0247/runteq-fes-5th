import Image from "next/image";
import LinkButton from "@/components/link";

export default function Cards({ id, name, appName, appUrl, imgUrl, shortDescription }) {

  const userNames = name.split(",");

  return (
    <section className="p-4 max-w-96 w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-center text-2xl">{appName}</h2>
        <Image src={imgUrl} alt={appName} width={1000} height={800} className="object-cover w-full h-full" />
        <p className="flex justify-center items-center gap-2">{userNames.map((userName, i) => <span key={i}>{userName}</span>)}</p>
        <p>{shortDescription}</p>
        <div className="flex justify-center items-center gap-4">
          <LinkButton href={`/app/${id}`} addLinkClass="px-4 py-2">詳細</LinkButton>
          <LinkButton href={appUrl} target addLinkClass="px-4 py-2" >サービス</LinkButton>
        </div>
      </div>
    </section>
  )
}