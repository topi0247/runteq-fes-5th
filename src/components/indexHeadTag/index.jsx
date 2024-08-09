"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function IndexHeadTag() {
  const [headName, setHeadName] = useState("");
  const [headDescription, setHeadDescription] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    changeHeadName();
  }, [pathname, searchParams]);

  const changeHeadName = () => {
    const query = new URLSearchParams(window.location.search);
    const type = query.get("type");
    switch (type) {
      case "engineer":
        setHeadName("現役エンジニア");
        setHeadDescription("現役エンジニアが開発したアプリ");
        break;
      case "pf":
        setHeadName("PF");
        setHeadDescription("応募時点で就職活動に使用するアプリ");
        break;
      case "miniapp":
        setHeadName("ミニアプリ");
        setHeadDescription("応募時点で就職活動に使用しないアプリ");
        break;
      case "team":
        setHeadName("チーム開発");
        setHeadDescription("チームで開発したアプリ");
        break;
      default:
        setHeadName("全て");
        setHeadDescription("全てのアプリ");
        break;
    }
  }

  return (
    <>
      <h1 className="text-center text-3xl text-outline" >- {headName} -</h1>
      <p className="text-center text-xl mt-4 text-outline">{headDescription}</p>
    </>
  );
};
