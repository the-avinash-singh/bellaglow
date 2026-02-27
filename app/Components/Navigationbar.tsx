import { faVsco } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Navigationbar = () => {
  const options=[
    {
      name:"Skincare",
      route:"/products/skincare"
    },
    {
      name:"Fragrance",
      route:"/products/fragrance"
    },
   
  ]
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between border-b border-[#e5dcde] bg-background-light/90 px-6 py-4 backdrop-blur-md dark:bg-background-dark/90 dark:border-white/10 lg:px-12'>
        <div className="flex items-center gap-12">
<Link className="flex items-center gap-3 text-text-main dark:text-white group" href="/">
<div className="size-8 text-primary transition-transform group-hover:rotate-12 duration-500">
<FontAwesomeIcon icon={faVsco} style={{height:30}}/>
</div>
<span className={`text-xl font-black tracking-tighter font-display`}>Bella Glow</span>
</Link>
<nav className="hidden gap-8 md:flex">
  {options.map((option,index)=>(
<Link className={`text-sm font-medium hover:text-primary transition-colors font-display`} key={index+option.name} href={option.route}>{option.name}</Link>
  ))}
</nav>
</div>

</nav>
  )
}

export default Navigationbar