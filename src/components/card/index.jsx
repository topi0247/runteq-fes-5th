import Image from "next/image";
import LinkButton from "@/components/link";

export default function Card({ appName, imageId, term, name, shortDescription, description, uuid, url, xUrl, timesUrl }) {
  return (
    <section className="p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-center text-2xl">{appName}</h2>
        <Image src={`https://lh3.googleusercontent.com/d/${imageId}`} alt="アプリ名" width={1000} height={800} className="object-cover w-full h-full" />
        <p>{term}期　{name}</p>
        <p>{shortDescription}</p>
        <hr className="" />
        <p>{description}</p>
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row-reverse">
          <LinkButton href={url} target addLinkClass="px-4 py-2">サービス</LinkButton>
          <div className="flex justify-center items-center gap-4">
            {xUrl && <LinkButton href={xUrl} addLinkClass="px-4 py-2" target>X</LinkButton>}
            {timesUrl && <LinkButton href={timesUrl} addLinkClass="px-4 py-2" target>times</LinkButton>}
          </div>
        </div>
      </div>
    </section>
  )
}