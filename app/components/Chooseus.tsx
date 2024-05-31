'use client'
import React from 'react'
import { useSectionInView } from '../libs/hook';
import { motion } from "framer-motion";


function Chooseus() {
  const { ref } = useSectionInView("About", 0.25);

  return (
    <section
    ref={ref}
    id='about'
    className='w-full'
    >
        <motion.div 
        className="py-12 px-5 bg-red-500 text-white"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <h2 className="sm:text-4xl text-2xl pb-2 text-center">WHY SHOULD YOU CHOOSE US</h2>
            <p className="sm:text-xl text-lg text-center leading-relaxed pb-2 text-slate-100">
              We help you strategize for trailer security, designing and
              implementing comprehensive <br /> security plans to ensure a
              robust, reliable, and secure transport experience.
            </p>
            <div className="w-64 h-[2px] bg-white" />
          </div>
        </motion.div>
    </section>
  );
}

export default Chooseus