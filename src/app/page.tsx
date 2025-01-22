import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Dish from "@/components/Dish";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Survey from "@/components/Survey";

export default function Home() {
  return (
    <main>
      <Hero />
      <Dish />
      <Featured />
      <Services />
      <Menu />
      <Survey />
    </main>
  );
}
