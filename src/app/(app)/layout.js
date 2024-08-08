import Headers from "@/components/headers";

export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[800px]">
      <Headers />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="text-white text-xl my-4 text-center w-full">©第5回RUNTEQ祭運営</footer>
    </div>
  );
}
