"use client"
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";
import React from 'react'



function CardInfo() {
  return (
    <motion.div className='flex flex-col items-center xl:flex-row xl:items-start py-5'
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
        <div className='px-12 text-neutral-600'> 
            <h2 className='text-4xl pb-4 sm:text-start text-center'>BUILDING EXTRAORDINARY HOMES</h2>
            <p className='sm:text-xl text-lg pb-3 leading-relaxed'>With over 18 years of experience, Keystone Construction offers beautiful <br/> high quality custom home building and renovation services in the<br/> Bloomington, Indiana area.</p>
            <div className='w-12 h-[1.5px] bg-red-500'/>
            <p className='pt-3 pb-10 leading-relaxed sm:text-lg text-md'>Our dedicated team will help you through the process of a new build or remodel to make <br/> it straightforward and enjoyable, ensuring that your home reflects your individual taste.<br/> With every unique project, our mission is to serve you by building or renovating the home<br/> of your dreams.</p>
            <Link href='#products' className='px-14 py-4 bg-white text-slate-700 rounded-[2.5rem] border border-slate-700 hover:text-white hover:bg-slate-700 transition tracking-widest'>VIEW MORE</Link>
        </div>
        <div className="py-12 xl:py-0 xl:w-[600px] sm:w-[800px] w-[400px]">
            <Image src={'https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
            alt='ImgSec'
            width={500}
            height={500}
            objectFit="cover"
            className="w-full h-full px-12"
            />
        </div>
    </motion.div>
  )
}

export default CardInfo