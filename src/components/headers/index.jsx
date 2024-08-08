"use client"

import Link from "next/link";
import { useState } from "react";

export default function Headers() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full text-blue-400 h-screen transition-all duration-500 ${openMenu ? "translate-x-0" : "delay-300 translate-x-full"}`} >
        <nav className="bg-black w-full h-full bg-opacity-50 flex justify-center items-center">
          <ul className={`bg-white bg-opacity-40 w-1/2 ml-auto h-full flex flex-col justify-center items-start transition-all duration-500  ${openMenu ? "delay-300 translate-x-0" : "translate-x-full"}`}>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400">全て</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400">現役エンジニア</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400">PF</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400">ミニアプリ</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2">チーム開発</Link></li>
          </ul>
        </nav>
      </header>
      <button className="fixed top-0 right-0 bg-orange-400 px-1.5 py-3 rounded mr-4 mt-4 text-white" onClick={() => setOpenMenu(!openMenu)}>Menu</button>
    </>
  )
}