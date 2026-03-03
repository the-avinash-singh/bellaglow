import Breadcrumb from "@/app/Components/Breadcrumb";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export interface ProductImageType {
  img: string;
  altText: string;
  productName: string;
  brand: string;
}

export default function ProductDetails({
  img,
  altText,
  productName,
  brand,
}: ProductImageType) {
  return (
    <>
      <section className="mx-auto grid w-full grid-cols-1 gap-12 px-6 py-8 md:grid-cols-2 lg:gap-24 lg:px-12 lg:py-16">
        <Image
          src={img}
          height={600}
          width={400}
          alt={altText}
          className="transition-transform duration-700 group-hover:scale-105 aspect-square w-full overflow-hidden rounded-xl bg-[#ece4e6] shadow-xl group"
        />

        <div className="my-auto">
          <Breadcrumb />
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-text-main dark:text-white lg:text-6xl">
            {productName}
          </h1>
          <span className="font-sans italic text-primary">By {brand}</span>
          <div className="text-2xl md:text-3xl font-medium font-display mt-4">
            ₹650/-
          </div>
          <p className="mt-8 text-lg font-sans leading-relaxed text-text-muted dark:text-gray-400">
            Inspired by the finest fabrics, this award-winning foundation glides
            on weightlessly for a flawless, lit-from-within glow. It blurs
            imperfections while hydrating skin for up to 24 hours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat ipsum velit incidunt nemo praesentium accusamus id tenetur autem, veniam quia! Ipsum quaerat aperiam, sit quia quidem delectus ad hic.
          </p>
        <button className="flex py-2 px-4 bg-emerald-600 hover:bg-green-600 transition-all duration-500 rounded-lg mt-6 shadow hover:shadow-lg text-lg justify-content-between align-items-center hover:scale-105 font-sans"><FontAwesomeIcon icon={faWhatsapp} style={{height:25,margin:"0 6px 0 0"}}/> Order on Whatsapp</button>
        </div>
      </section>
    </>
  );
}
