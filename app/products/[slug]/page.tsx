import React from 'react'
import Menu from './Menu'
import Product2, { Product2Type } from '@/app/Components/Product2'

const products:Product2Type[]=[
  {
    name:"Luminous Silk Foundation",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuB3nCyRTx5DQ-xIkSnj432yM2yP2Jm3Awr8SjYd1Wt8XHdxjmfbXjOqh8xKU5iwfR2xhqUFybleh1DlZ7uBrRe0_rHK6Gkg0wqDivjfPTNAVRpl8BRTzadxYtca1eL42XyBSMzGejkf0VCtNpoWsbSNZzaGTswFJAWYmljf01eOSRBP42Fc9loZ0TAC3DAEdCKwU-zi6E9XyWce-J9Loz6xlTFQosvHHuQalP-AAxPahTT-xJrndks11_U67NhH0gLowNYyzZu0J9JC",
    tag:"BestSeller",
    price:4000,
    desc:"Hydrating coverage for a dewy finish"
  },
  {
    name:"Velvet Matte Lipstick",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDiyRnS3k92BFOuTvDfgyvFX0gcB0XViIK-HcGLc403tvu-ANKPBZn_q8qWimdBTx7x74Vkc53Qtdvm1JJBBBlgupZx6sBQWlLJRr3N2vAumwp2srMjcBL9dt0tyJKNwWRTUH6k6qLU6LGRhQUX7xLWFAGjBufXv6eCnstFSK_9EQ_WP21WMqaBviDpb-30TelucQYxjSRnHN3qsIiBCpXxOu2iObxtpfsyvkZpN9fcGz3lVxXSvLDIlihk_YbaiByYAmoYjZQGA_9T",
    price:400,
    desc:"Long-lasting bold color in Rouge"
  },
  {
    name:"Radiance Serum",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAmIqzCh-ZN9FMdtQAYL_SGjnyXEdFtMsZPWL7nen38IUEzCf1eNdLfoLw-mg3patmhxctYcA9efYZaj6sJgrKYHcQgbDQZFeo0AqzjVsHq2gWvlpzi--gUSYBWufFr_ECRkWfbv7uNBQTOHgNKA7SstXLNMW-nxnXhoN9rfaLv0WBdzNtDFVWISeCI19YG3MlcbAM09vcjukYdC7rTN3nPYxP9PVpvBE0C3t00e1FgWsmawaKB2pA7APhD7ku-0qzBZP4HQY5euxG4",
    tag:"new",
    price:400,
    desc:"Deep hydration for glowing skin"
  },
  {
    name:"Rosy Cheek Blush",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDgzJekRhMmqS23DpngPGAWZpe34Wjeowsijff9zM5XmS96LIlpRtIkLy_Q6ekGo0m94-VVHleAGkMRTvc232UnNpVdIZ08Cd-56Xiu0ej6kmLPxnpBsL_vybGENrR1pXFrO4Zk8kB6J75qayqyRuQ0wegb-mM86QbSLiD_BWyXzeRpjIODJZNEQLDATSKs5ROJ27q1kTwOWFtPM9k8bKj3VYIgnaAXTQZry8Bb3oRcEg6UjZ4SIyRcyexiCkUMzhdWD1g668CkyeYj",
    tag:"Recommended",
    price:900,
    desc:"Natural flush of buildable color"
  },
  {
    name:"Luminous Silk Foundation",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuB3nCyRTx5DQ-xIkSnj432yM2yP2Jm3Awr8SjYd1Wt8XHdxjmfbXjOqh8xKU5iwfR2xhqUFybleh1DlZ7uBrRe0_rHK6Gkg0wqDivjfPTNAVRpl8BRTzadxYtca1eL42XyBSMzGejkf0VCtNpoWsbSNZzaGTswFJAWYmljf01eOSRBP42Fc9loZ0TAC3DAEdCKwU-zi6E9XyWce-J9Loz6xlTFQosvHHuQalP-AAxPahTT-xJrndks11_U67NhH0gLowNYyzZu0J9JC",
    price:400,
    desc:"Hydrating coverage for a dewy finish"
  },
]

function  page() {
  return (
    <div className="max-w-360 mx-auto lg:flex min-h-screen">
      <Menu/>
    <main className='flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-12 gap-x-8">      
      {products.map((product, index)=>(
        <Product2 key={index+product.name} name={product.name} desc={product.desc} img={product.img} price={product.price} tag={product.tag} />
      ))}
      </div>
    </main>
    </div>
  )
}

export default page
