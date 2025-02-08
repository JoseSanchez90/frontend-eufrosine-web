import CarouselTextBanner from "@/components/carousel-text-banner";
import MainBanner from "@/components/main-banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <CarouselTextBanner/>
      <MainBanner/>
    </main>
  );
}
