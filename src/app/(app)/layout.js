import Headers from "@/components/headers";
import { Suspense } from "react";

export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-auto">
      <Suspense fallback={<></>} >
        <Headers />
      </Suspense>
      <main className="flex-grow mt-12 m-auto w-full">
        {children}
      </main>
      <footer className="text-black my-4 text-center w-full">©第5回RUNTEQ祭運営</footer>
    </div>
  );
}
