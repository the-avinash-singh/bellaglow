import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navigationbar from "./Components/Navigationbar";
import Footer from "./Components/Footer";

const noto_sans = Noto_Sans({
  variable:"--noto-sans"
});
const noto_serif = Noto_Serif({
  variable:"--noto-serif"
});

export const metadata: Metadata = {
  title: "Bellaglow",
  description: "Buy your costmatics at lowest price possible",
  appleWebApp:{title:"Bellaglow"},
  openGraph:{
    type:'website',
    title:"Bellaglow",
    siteName:"Bellaglow",
    url:"www.bellaglow.com",
    description:"Buy your costmatics at lowest price possible",
    images:[
      {url:"https://bellaglo.netlify.app/web-app-manifest-192x192", alt:"bellaglow logo"},
      {url:"https://bellaglo.netlify.app/web-app-manifest-512x512"}
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${noto_serif.variable} antialiased`}
      >
        <Navigationbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
