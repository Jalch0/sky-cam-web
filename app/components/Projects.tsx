'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Image1 from '@/app/images/img1.png'
import Image2 from '@/app/images/img2.jpg'
import Image3 from '@/app/images/img3.jpg'


function Projects() {

const [hovered, setHovered] = useState(false);
const [hovered2, setHovered2] = useState(false);
const [hovered3, setHovered3] = useState(false);


  return (
    <div className="w-full py-16">
      <h2 className='text-center pb-12 text-4xl font-bold text-slate-700'>TAKE A LOOK AT OUR PRODUCTS</h2>
      <div className="flex">
      <div 
      className="relative w-full h-[400px] group" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={Image1}
          alt="TrailersImage"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
        />
        <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${hovered ? 'opacity-50' : ''}`}></div>
      </div>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          className={`stroke-current fill-none transition-all duration-300 ease-in-out ${hovered ? 'stroke-white stroke-[1px] animate-draw' : 'stroke-transparent stroke-[1px] animate-undraw'}`}
          x="5"
          y="5"
          width="90"
          height="90"
        />
      </svg>

      <div className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-2xl">Your Text Here</span>
      </div>
    </div>
    
    <div 
      className="relative w-full h-[400px] group" 
      onMouseEnter={() => setHovered2(true)} 
      onMouseLeave={() => setHovered2(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={Image2}
          alt="TrailersImage"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
        />
        <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${hovered2 ? 'opacity-50' : ''}`}></div>
      </div>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          className={`stroke-current fill-none transition-all duration-300 ease-in-out ${hovered2 ? 'stroke-white stroke-1 animate-draw' : 'stroke-transparent stroke-2 animate-undraw'}`}
          x="5"
          y="5"
          width="90"
          height="90"
        />
      </svg>
      <div className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${hovered2 ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-2xl">Your Text Here</span>
      </div>
    </div>
    <div 
      className="relative w-full h-[400px] group" 
      onMouseEnter={() => setHovered3(true)} 
      onMouseLeave={() => setHovered3(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={Image3}
          alt="TrailersImage"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
        />
        <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${hovered3 ? 'opacity-50' : ''}`}></div>
      </div>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          className={`stroke-current fill-none transition-all duration-300 ease-in-out ${hovered3 ? 'stroke-white stroke-1 animate-draw' : 'stroke-transparent stroke-2 animate-undraw'}`}
          x="5"
          y="5"
          width="90"
          height="90"
        />
      </svg>
      <div className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${hovered3 ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-2xl">Your Text Here</span>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Projects