'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
   const  [isVisible, setIsVisible] = useState(false)
     
    useEffect(()=>{
        const toggleVisibility = ()=>{
            if(window.scrollY > 300) setIsVisible(true)
                else setIsVisible(false)
        }
        window.addEventListener("scroll", toggleVisibility)
        return ()=> window.removeEventListener("scroll", toggleVisibility)

    },[])

    const scrollToTop =()=>{
        window.scrollTo ( {
            top:0,
            behavior: "smooth"
        });

    }

  return (
    <div className='fixed bottom-4 animate-pulse z-50 right-4'>
        {isVisible && <button className='bg-blue-950/60 hover:bg-blue-900 cursor-pointer text-white rounded-full w-12 h-12 
                    flex items-center justify-center focus:outline-none transition-all duration-300 
                    animate-pulse hover:animate-none ring-2 ring-blue-400/30 hover:ring-blue-400/60' 
                    aria-label="Scroll to top" onClick={scrollToTop}>
            <FaArrowUp/>
        </button>
    }</div>
  )
}

export default ScrollToTop