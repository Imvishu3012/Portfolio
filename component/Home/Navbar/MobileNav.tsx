import NavLinks from "@/constants/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
   showNav: boolean;
   closeNav: ()=> void;
};

const MobileNav = ({showNav, closeNav}:Props) => {

  const navOpen = showNav? "translate-x-0": "translate-x-[100%]"

  return ( <div>
    <div className={`fixed inset-0 transform ${navOpen} transition-all right-0 
    duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}></div>
    {/* NavLinks */}
    <div className={`text-white fixed justify-center ${navOpen} flex flex-col h-full transform 
    transition-all duration-500 delay-300 w-[81%] sm:w-[62%] bg-cyan-800 space-y-6 z-[100050] right-0`}>
      {NavLinks.map((link)=>{
      return <Link key={link.id} href={link.url}>
          <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
            {link.Label}
            </p>
      </Link>})}
       {/* cross-icons */}
      <CgClose onClick={closeNav} className="absolute top-[1.5rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 " />
      </div>
      
    </div>
  );
};

export default MobileNav;
