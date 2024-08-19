"use client";

import Cards from "@/components/cards";
import IndexHeadTag from "@/components/indexHeadTag";
import LinkButton from "@/components/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function FetchData() {
  const [type, setType] = useState("all");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setType(params.get("type") || "all");
  }, [pathname, searchParams]);

  const { data } = useSWR(`/api/index/${type}`, fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
      {data.map((data, i) => <Cards key={i} {...data} />)}
    </div>
  )
}

export default function App() {
  return (
    <article className="w-full md:mt-8">
      <Suspense fallback={<></>} >
        <IndexHeadTag />
      </Suspense>
      <Suspense fallback={<></>} >
        <FetchData />
      </Suspense>
      {/* <section className="my-8">
        <h2 className="text-xl text-center my-4">投票フォームはこちら！</h2>
        <LinkButton href="" addLinkClass="px-8 py-4" >投票フォーム</LinkButton>
      </section> */}
    </article>);
}