import { Aside } from "@/components/Aside";
import { BottomBar } from "@/components/BottomBar";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-[100vh] text-white">
      <div className="flex h-[100vh] w-full">
      <Hero />
      <Aside />
      </div>
      <BottomBar />
    </main>
  );
}
