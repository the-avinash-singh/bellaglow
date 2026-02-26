'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Menu() {
  const pathname=usePathname()
  const categories=[
    {
      cat:"All Products",
      link:"/products/all",
    },
    {
      cat:"Face",
      link:"/products/face",
    },
    {
      cat:"Fragrance",
      link:"/products/fragrance",
    },
    {
      cat:"Skincare",
      link:"/products/skincare",
    },
    {
      cat:"Cheek",
      link:"/products/cheek",
    },
  ]
  return (
    <>
    <aside className="hidden lg:block w-64 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto no-scrollbar py-10 pl-8 pr-4">
<div className="space-y-10">
<div>
<h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold font-display mb-6">Shope by Category</h3>
<ul className="space-y-4">
{categories.map((category,index)=>(
  <li key={index+category.cat}>
<Link className="flex items-center justify-between group" href={category.link}>
<span className="text-base text-gray-900 dark:text-gray-100 font-medium group-hover:text-primary transition-colors font-display">{category.cat}</span>
{pathname==category.link&&<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
</Link>
</li>
))}
</ul>
</div>
</div>
</aside>
    </>
  )
}

export default Menu