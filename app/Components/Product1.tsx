'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";


export interface Products{
image:string;
productName:string;
productUse:string;
price:number;
route:string
}

function Product1({image,productName,productUse,price,route}:Products) {
  const router=useRouter()
  return (
    <div>
      <div className="group flex flex-col gap-4 cursor-pointer">
        <div className="relative w-full aspect-3/4 overflow-hidden rounded-2xl">
          <Image
            width={200}
            height={400}
            className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-700 ease-in-out group-hover:scale-110"
            alt="Minimalist bottle of Silk Serum on a stone surface"
            src={image}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white text-black text-xs font-bold py-2.5 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-primary hover:text-white uppercase tracking-wider whitespace-nowrap" onClick={()=>router.push(route)}>
            Quick View
          </button>
        </div>
        <div className="text-center space-y-1">
          <p
            className={`text-text-main dark:text-white text-lg font-bold  group-hover:text-primary transition-colors`}
          >
            {productName}
          </p>
          <p className={`text-text-muted dark:text-gray-400 font-sans text-sm`}>
            {productUse}
          </p>
          <p className="text-primary font-medium mt-1">₹{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product1;
