"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Menu() {
  const pathname = usePathname();
  const route = useRouter();
  const categories = [
    {
      cat: "All Products",
      link: "/products/all",
    },
    {
      cat: "Face",
      link: "/products/face",
    },
    {
      cat: "Fragrance",
      link: "/products/fragrance",
    },
    {
      cat: "Skincare",
      link: "/products/skincare",
    },
    {
      cat: "Cheek",
      link: "/products/cheek",
    },
  ];
  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0 sticky top-20 overflow-y-auto no-scrollbar py-10 pl-8 pr-4">
        <div className="space-y-10">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold font-display mb-6">
              Shope by Category
            </h3>
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index + category.cat}>
                  <Link
                    replace
                    className="flex items-center justify-between group"
                    href={category.link}
                  >
                    <span className="text-base text-gray-900 dark:text-gray-100 font-medium group-hover:text-primary transition-colors font-display">
                      {category.cat}
                    </span>
                    {pathname == category.link && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div className="lg:hidden mb-8 mt-4 overflow-x-auto no-scrollbar pb-2 px-4">
        <div className="flex gap-3">
          {categories.map((category, index) => (
            <button
              key={index + category.cat}
              className={`px-5 py-2 ${category.link == pathname ? "bg-text-main dark:bg-white text-white dark:text-text-main" : " bg-white dark:bg-[#332224] border border-[#e6e0e0] dark:border-[#4a3b3d] text-text-main dark:text-white"} rounded-full text-sm whitespace-nowrap`}
              onClick={() => route.replace(category.link)}
            >
              {category.cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
