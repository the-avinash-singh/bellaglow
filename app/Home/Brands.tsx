import Image from "next/image";
import Marquee from "react-fast-marquee";


function Brands() {

  const brands=[
    {
      icon:"/brands/plix.svg",
      name:"Plix"
    },
    {
      icon:"/brands/lafz.webp",
      name:"LAFZ"
    },
    {
      icon:"/brands/iba.png",
      name:"Iba"
    },
    {
      icon:"/brands/plum.webp",
      name:"Plum"
    },
    {
      icon:"/brands/urban-gabru.webp",
      name:"Urban Gabru"
    },
    {
      icon:"/brands/nykaa.svg",
      name:"Nykaa"
    },
    {
      icon:"/brands/oziva.svg",
      name:"Oziva"
    },
    {
      icon:"/brands/bombay-shaving.webp",
      name:"bombay shaving company"
    },
  ]

  return (
    <>
      <section className="py-24 bg-[#FDF8F4] dark:bg-[#201214] relative overflow-hidden" id="brands">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-accent/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-6">
            {/* <FontAwesomeIcon icon={fa} color="#dd3c57" style={{height:40,margin:"0 auto",marginBottom:30}}/> */}
          <h2 className={`text-3xl md:text-4xl font-bold text-text-main dark:text-white font-display`}>
            We have Products from
          </h2>
          <Marquee
          autoFill
          speed={100}
          className="mt-16"
        >
          {brands.map((brand, index: number) => (
            <div key={index} className="mx-10 md:mx-16">
              <div className="flex flex-col justify-center items-center font-sans">
                <div className="mb-3">
                  <Image
                    src={brand.icon}
                    alt={brand.name}
                    height={100}
                    width={100}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
          
        </div>
      </section>
    </>
  );
}

export default Brands;
