import React from "react";
import Product1, { Products } from "../Components/Product1";

const products: Products[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgzJekRhMmqS23DpngPGAWZpe34Wjeowsijff9zM5XmS96LIlpRtIkLy_Q6ekGo0m94-VVHleAGkMRTvc232UnNpVdIZ08Cd-56Xiu0ej6kmLPxnpBsL_vybGENrR1pXFrO4Zk8kB6J75qayqyRuQ0wegb-mM86QbSLiD_BWyXzeRpjIODJZNEQLDATSKs5ROJ27q1kTwOWFtPM9k8bKj3VYIgnaAXTQZry8Bb3oRcEg6UjZ4SIyRcyexiCkUMzhdWD1g668CkyeYj",
    productName: "Rosy cheek Blush",
    productUse: "Natural flush of buildable color",
    price: 2300,
    route: "/product/id",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3nCyRTx5DQ-xIkSnj432yM2yP2Jm3Awr8SjYd1Wt8XHdxjmfbXjOqh8xKU5iwfR2xhqUFybleh1DlZ7uBrRe0_rHK6Gkg0wqDivjfPTNAVRpl8BRTzadxYtca1eL42XyBSMzGejkf0VCtNpoWsbSNZzaGTswFJAWYmljf01eOSRBP42Fc9loZ0TAC3DAEdCKwU-zi6E9XyWce-J9Loz6xlTFQosvHHuQalP-AAxPahTT-xJrndks11_U67NhH0gLowNYyzZu0J9JC",
    productName: "Luminious Silk foundation",
    productUse: "Hydrating coverage for a dewy finish",
    price: 4593,
    route: "",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiyRnS3k92BFOuTvDfgyvFX0gcB0XViIK-HcGLc403tvu-ANKPBZn_q8qWimdBTx7x74Vkc53Qtdvm1JJBBBlgupZx6sBQWlLJRr3N2vAumwp2srMjcBL9dt0tyJKNwWRTUH6k6qLU6LGRhQUX7xLWFAGjBufXv6eCnstFSK_9EQ_WP21WMqaBviDpb-30TelucQYxjSRnHN3qsIiBCpXxOu2iObxtpfsyvkZpN9fcGz3lVxXSvLDIlihk_YbaiByYAmoYjZQGA_9T",
    productName: "Velvet Matte Lipstick",
    productUse: "Long-lasting bold color in Rouge",
    price: 670,
    route: "",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwZCQHJ2lPmXpbjceHvojCwSF2tfXeSVM2Rwip-fIMc7kSJMAMNR_Od7CdUNtxj4-qWe-B9uLcTwFevMdob7wahQJ-JUNzyY0Vqa1jLK5s5940mYqZWjQDKEHk1sT4zid1bAG4pBKA0wRcimGgObtkL4coaJcJECYVOAa7eeUOrZ5YMy0BKAtJECnKwoV2Iq6VHuHjD_LHQVCsU_MDqeyR895-xQGQND6YRPS9E1O5-uimb4Dh6-bGqfAQ5SV_sjOMI-ib9OP3wNzD",
    productName: "Midnight Repair Cream",
    productUse: "Restorative overnight treatment",
    price: 1020,
    route: "",
  },
];

function ProductGrid() {
  return (
    <>
      <section className="py-20 md:py-32 px-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-240 mx-auto text-center space-y-4">
          <h2
            className={`text-primary text-sm font-bold tracking-[0.2em] uppercase font-display`}
          >
            Best Sellers
          </h2>
          <h3 className="text-text-main dark:text-white text-3xl md:text-5xl font-bold leading-tight font-display">
            Curated Luminosity
          </h3>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto mt-6"></div>
        </div>
      </section>
      <section className="pb-24 px-4 md:px-10 lg:px-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product, index) => (
              <Product1
                image={product.image}
                productName={product.productName}
                productUse={product.productUse}
                price={product.price}
                route={product.route}
                key={index + "img"}
              />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button className="group flex items-center gap-2 text-text-main dark:text-white font-bold text-sm tracking-widest uppercase hover:text-primary transition-colors font-display">
              View All Products
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductGrid;
