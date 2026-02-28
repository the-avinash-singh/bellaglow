import Image from 'next/image'

export interface Product2Type{
    tag?:string;
    img?:string;
    name:string;
    price:number;
    desc:string;
}

function Product2({tag, name, img, price, desc}:Product2Type) {
  return (
    <>
<div className="group flex flex-col gap-4">
<div className="relative w-full aspect-4/5 bg-[#FDF8F4] dark:bg-[#2A1E20] rounded-lg overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>
<div className="absolute inset-0 p-8 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
{tag&&<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1 rounded-md bg-white/90 dark:bg-black/60 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-white">{tag}</span>
</div>}
<Image className="w-full h-full bg-contain bg-center bg-no-repeat rounded-lg" height={200} width={100} alt="Red velvet lipstick tube open and tilted" src={img||""}/>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-xl font-medium text-text-main dark:text-white group-hover:text-primary transition-colors cursor-pointer">{name}</h3>
<span className="text-lg font-medium text-primary">₹{price}</span>
</div>
<p className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">{desc}</p>
<button className="mt-4 w-full py-3 border border-text-main/10 dark:border-white/20 rounded text-sm font-semibold uppercase tracking-widest hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-text-main transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">View Details</button>
</div>
</div>
    </>
  )
}

export default Product2