import Image from "next/image";
import LinkButton from "@/components/link";

export default function Cards({ appName, imageId, term, name, shortDescription, uuid, url }) {
  return (
    <section className="p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-center text-2xl">{appName}</h2>
        <Image src={`https://lh3.googleusercontent.com/d/${imageId}`} alt="アプリ名" width={1000} height={800} className="object-cover w-full h-full" />
        <p>{term}期　{name}</p>
        <p>{shortDescription}</p>
        <div className="flex justify-center items-center gap-4">
          <LinkButton href={`app/${uuid}}`}>詳細</LinkButton>
          <LinkButton href={url} target >サービス</LinkButton>
        </div>
      </div>
    </section>
  )
}