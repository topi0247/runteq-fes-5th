import { GoogleAnalytics } from '@next/third-parties/google';
import Particle from "../components/particle";
import "./globals.css";
import "./style.css";
import { Noto_Serif_JP } from "next/font/google";

const notoSerifJp = Noto_Serif_JP({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "第5回RUNTEQ祭応募アプリ",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJp.className} w-full flex justify-center items-center`}>
        <Particle />
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
