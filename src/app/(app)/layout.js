import Headers from "@/components/headers";

export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[800px] min-h-screen">
      <Headers />
      <main className="flex-grow mt-12 p-8">
        {children}
      </main>
      <footer className="text-black my-4 text-center w-full">©第5回RUNTEQ祭運営</footer>
    </div>
  );
}
