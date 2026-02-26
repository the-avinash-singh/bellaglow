import {
  faInstagram,
  faTelegram,
  faVsco,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Links = [
  {
    heading: "Shop",
    subLink: [
      {
        cat: "Face",
        route: "/products/face",
      },
      {
        cat: "Fragrance",
        route: "/products/fragrance",
      },
      {
        cat: "Skincare",
        route: "/products/skincare",
      },
      {
        cat: "Cheek",
        route: "/products/cheek",
      },
    ],
  },
  {
    heading: "About",
    subLink: [
      { cat: "Our Story", route: "/our-story" },
      { cat: "Our Effort", route: "/our-effort" },
    ],
  },
  {
    heading: "Support",
    subLink: [
      { cat: "Contact Us", route: "/contact" },
      { cat: "Shipping & Returns", route: "/shippin-returns" },
    ],
  },
];

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-[#1a0f11] pt-16 pb-8 border-t border-[#f4f0f1] dark:border-white/5 font-sans">
        <div className="layout-container max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* <!-- Brand Column --> */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-text-main dark:text-white">
                <FontAwesomeIcon
                  icon={faVsco}
                  color="#dd3c57"
                  style={{ height: 25 }}
                />
                <span
                  className={`text-lg font-bold uppercase tracking-wide font-display`}
                >
                  Bella Glow
                </span>
              </div>
              <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                Luxury skincare rooted in nature, perfected by science. Designed
                for those who seek the light within.
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  className="w-10 h-10 rounded-full bg-background-light dark:bg-white/5 flex items-center justify-center text-text-main dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
                  href="https://www.instagram.com/bellaglowcosmetics2025" target="_blank"
                >
                  {/* <!-- Instagram icon simulated with camera --> */}
                  <FontAwesomeIcon icon={faInstagram} style={{ height: 20 }} />
                </Link>
                <Link
                  className="w-10 h-10 rounded-full bg-background-light dark:bg-white/5 flex items-center justify-center text-text-main dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
                  href="https://t.me/+aITSPbOSrtE5OWRl" target="_blank"
                >
                  {/* <!-- Facebook icon simulated with public --> */}
                  <FontAwesomeIcon icon={faTelegram} style={{ height: 20 }} />
                </Link>
                <Link
                  className="w-10 h-10 rounded-full bg-background-light dark:bg-white/5 flex items-center justify-center text-text-main dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
                  href={`https://wa.me/8484006409?text=Hello I am a visiter on Bellaglow.com`} target="_blank"
                >
                  {/* <!-- Pinterest icon simulated with push_pin --> */}
                  <FontAwesomeIcon icon={faWhatsapp} style={{ height: 20 }} />
                </Link>
              </div>
            </div>
            {/* <!-- Links Column 1 --> */}
            {Links.map((link, index) => (
              <div key={index + link.heading}>
                <h4 className="font-bold text-text-main dark:text-white mb-6 uppercase text-sm tracking-wider">
                  {link.heading}
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-text-muted dark:text-gray-400">
                  {link.subLink.map((sub, index) => (
                    <li key={index + sub.cat}>
                      <Link
                        className="hover:text-primary transition-colors"
                        href={sub.route}
                      >
                        {sub.cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
