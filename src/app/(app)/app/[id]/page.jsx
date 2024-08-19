"use client";

import Card from "@/components/card";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AppShow({ params }) {
  const { data } = useSWR(`/api/${params.id}`, fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <article className="w-full md:mt-8">
      <div className="w-full container">
        <Card {...data[0]} />
      </div>
    </article>);
}