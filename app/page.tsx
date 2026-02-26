import HeroSection from "./Home/HeroSection";
import ProductGrid from "./Home/ProductGrid";
import Philosophy from "./Home/Philosophy";
import NewsLetter from "./Home/NewsLetter";

export default function Home() {
  return (
    <>
    <main className="flex-1 flex flex-col">
    <HeroSection/>
    <ProductGrid/>
    <Philosophy/>
    <NewsLetter/>
    </main>
    </>
  );
}
