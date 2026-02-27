import HeroSection from "./Home/HeroSection";
import ProductGrid from "./Home/ProductGrid";
import Philosophy from "./Home/Philosophy";
import Brands from "./Home/Brands";

export default function Home() {
  return (
    <>
    <main className="flex-1 flex flex-col">
    <HeroSection/>
    <ProductGrid/>
    <Philosophy/>
    <Brands/>
    </main>
    </>
  );
}
