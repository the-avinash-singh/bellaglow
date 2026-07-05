import { faVsco } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Navigationbar = () => {
  const options = [
    {
      name: "Skincare",
      route: "/products/skincare"
    },
    {
      name: "Fragrance",
      route: "/products/fragrance"
    },

  ]
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e5dcde] bg-background-light/90 px-6 py-4 backdrop-blur-md dark:bg-background-dark/90 dark:border-white/10 lg:px-12">

      <div className="flex items-center gap-12">
        <Link
          className="flex items-center gap-3 text-text-main dark:text-white group"
          href="/"
        >
          <div className="size-8 text-primary transition-transform duration-500 group-hover:rotate-12">
            <FontAwesomeIcon icon={faVsco} style={{ height: 30 }} />
          </div>
          <span className="text-xl font-black tracking-tighter font-display">
            Bella Glow
          </span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {options.map((option, index) => (
            <Link
              key={index + option.name}
              href={option.route}
              className="text-sm font-medium font-display transition-colors hover:text-primary"
            >
              {option.name}
            </Link>
          ))}
        </div>
      </div>

      <Link href={`https://wa.me/8484006409?text=Hello I am a visiter on Bellaglow.com and I want to inquire about`}
        target="_blank" 
        className="text-sm font-medium font-display transition-colors hover:text-primary"
        >
        Contact Us
      </Link>

    </nav>
  )
}

export default Navigationbar
