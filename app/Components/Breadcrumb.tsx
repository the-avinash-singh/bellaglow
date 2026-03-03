"use client"
import { usePathname } from 'next/navigation'

interface BreadcrumbType{
  className?:string;
  prefix?:string;
}


export default function Breadcrumb({className,prefix}:BreadcrumbType) {
    let location=usePathname()
  return (
    <span className={`text-primary font-display capitalize ${className} `}>{prefix}{(location.slice(1)).split("/").join(" > ")}</span>
  )
}
