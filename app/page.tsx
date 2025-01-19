import Hero from "@/components/Hero";
import Pow from "@/components/Pow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <Pow />
    </main>
  );
}
