"use client"

import Link from "next/link";
import { useState } from "react";

export default function Headers() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full text-blue-400 h-screen transition-all duration-500 ${openMenu ? "translate-x-0" : "delay-300 translate-x-full"} md:translate-x-0 md:h-auto`} >
        <nav className="bg-black w-full h-full bg-opacity-50 flex justify-center items-center md:bg-transparent">
          <ul className={`bg-white bg-opacity-40 w-1/2 ml-auto h-full flex flex-col justify-center items-start transition-all duration-500  ${openMenu ? "delay-300 translate-x-0" : "translate-x-full"} md:translate-x-0 md:flex-row md:items-center md:w-full md:shadow-lg`}>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400 md:border-b-0 md:border-r md:text-center md:py-4 md:bg-opacity-40 md:text-lg">全て</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400 md:border-b-0 md:border-r md:text-center md:py-4 md:bg-opacity-40 md:text-lg">現役エンジニア</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400 md:border-b-0 md:border-r md:text-center md:py-4 md:bg-opacity-40 md:text-lg">PF</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 border-b border-orange-400 md:border-b-0 md:border-r md:text-center md:py-4 md:bg-opacity-40 md:text-lg">ミニアプリ</Link></li>
            <li className="w-full"><Link href="" className="bg-white block w-full pl-4 py-2 md:text-center md:py-4 md:bg-opacity-40 md:text-lg">チーム開発</Link></li>
          </ul>
        </nav>
      </header>
      <button className="fixed top-0 right-0 bg-orange-400 px-1.5 py-3 rounded mr-4 mt-4 text-white md:hidden" onClick={() => setOpenMenu(!openMenu)}>Menu</button>
    </>
  )
}