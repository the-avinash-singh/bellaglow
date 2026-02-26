import { faLeaf, faRecycle, faShieldCat,faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";


interface Thought {
    name: string;
    desc: string;
    icon: ReactElement;
}
const thoughts:Thought[]=[
    {
        name:"Clean Formula",
        desc:"No parabens, sulfates, or artificial fragrances.",
        icon:<FontAwesomeIcon icon={faDroplet} style={{height:18}}/>
    },
    {
        name:"Cruelty-Free",
        desc:"Never tested on animals, always kind to nature.",
        icon:<FontAwesomeIcon icon={faShieldCat} style={{height:18}}/>
    },
    {
        name:"Sustainable",
        desc:"Ethically sourced and 100% recyclable packaging.",
        icon:<FontAwesomeIcon icon={faRecycle} style={{height:18}}/>
    },
]

function Philosophy() {
  return (
    <>
      <section className="py-24 bg-white dark:bg-[#2a181b] border-y border-[#f4f0f1] dark:border-white/5">
        <div className="layout-container max-w-7xl mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 h-full min-h-125 w-full rounded-2xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                data-alt="Abstract creamy texture of skincare product smeared on glass"
                style={{
                  backgroundImage:
                    'url("heroSection/philosophy.png")',
                }}
              ></div>
              <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-black/80 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs z-10">
                <div className="flex items-center gap-3 mb-2">
                  <FontAwesomeIcon icon={faLeaf} style={{height:18}}/>
                  <span className="text-xs font-bold uppercase tracking-wider dark:text-white">
                    Eco-Certified
                  </span>
                </div>
                <p className="text-sm text-text-muted dark:text-gray-300 leading-relaxed font-sans">
                  Every ingredient is traceable to its source, ensuring ethical
                  practices from farm to face.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <div className="space-y-4">
                <span className={`text-primary text-sm font-bold tracking-[0.2em] uppercase font-display`}>
                  Our Philosophy
                </span>
                <h2 className={`text-text-main dark:text-white text-4xl lg:text-5xl font-bold leading-tight font-display`}>
                  The Science of{" "}
                  <span className="italic text-primary">Glow</span>
                </h2>
                <p className={`text-text-muted dark:text-gray-300 text-lg leading-relaxed font-sans max-w-lg`}>
                  We believe in the power of sustainable sourcing and premium
                  ingredients to bring out your inner light. Our formulas are a
                  bridge between ancient rituals and modern biotechnology.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {thoughts.map((thought,index)=>
                (<div key={index+thought.name} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-background-light dark:bg-white/10 flex items-center justify-center shrink-0 text-primary">
                    {thought.icon}
                  </div>
                  <div>
                    <h3 className="text-text-main dark:text-white font-bold mb-1 font-display">
                      {thought.name}
                    </h3>
                    <p className={`text-sm text-text-muted dark:text-gray-400 font-sans`}>
                      {thought.desc}
                    </p>
                  </div>
                </div>)
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Philosophy;
