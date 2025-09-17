import type { Metadata } from "next";
import { Inter } from "next/font/google";                               //Changed to Inter
import "./globals.css";
import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";
import Footer from "@/component/Home/Footer/Footer";
import ScrollToTop from "@/component/Helper/ScrollToTop";

const fonts = Inter({                                                   //Added Variable fonts
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
})



export const metadata: Metadata = {
  title: "Vishal Portfolio",                                              //Edited to Name Portfolio
  description: "Portfolio Build with Nextjs 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //Edited the body className content font.ClassName and bg color

    <html lang="en">    
     <body className={`antialiased  ${fonts.className} w-fit h-[7150] sm:h-fit lg:h-fit`}> 
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
