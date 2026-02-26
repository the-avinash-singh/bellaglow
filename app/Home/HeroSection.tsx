import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full h-[85vh] min-h-150 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/20 z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear hover:scale-105"
            data-alt="Close up of radiant glowing skin with golden light highlights"
            style={{ backgroundImage: `url(/heroSection/heroPhoto.png)` }}
          ></div>
        </div>
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8 fade-in-up">
          <h1
            className={`text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight drop-shadow-sm font-display`}
          >
            Awaken Your
          </h1>
          <span className="italic font-lighter text-white/90 text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight drop-shadow-sm">
            Natural Radiance
          </span>
          <p
            className={`text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto font-sans tracking-wide`}
          >
            Clean, sustainable luxury designed for the modern muse. Experience
            the science of glow with our new botanical serum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link className="py-2 px-7 rounded-full bg-white text-primary font-extrabold tracking-wide hover:bg-gray-200 transition-all hover:scale-105 duration-300 shadow-xl" href={"/products/all"}>
              Explore Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
