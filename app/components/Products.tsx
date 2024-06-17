'use client'
import React from 'react'
import { MdSecurity } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaBuildingShield } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { BsBuildingFillLock } from "react-icons/bs";
import { motion } from "framer-motion";


function Products() {

  return (


    <motion.div 
    className="pb-16"
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
        <div className="pb-12">
          <h2 className="text-4xl text-slate-700 text-center font-bold">
            Solutions For Multi-Industry Use
          </h2>
        </div>

        <div className="
        flex 
        justify-center 
        gap-24 
        pb-12
        flex-col
        items-center
        px-12
        md:flex-row
        md:items-start
        md:px-0
        text-center
        ">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full bg-slate-950 flex justify-center items-center w-28 h-28 hover:bg-red-700 transition ease-in-out hover:scale-110 hover:-translate-y-1">
              <MdSecurity className="text-5xl text-white" />
            </div>
            <p className="text-xl py-4 ">Apartment Security</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full bg-slate-950 flex justify-center items-center w-28 h-28 hover:bg-red-700 transition ease-in-out hover:scale-110 hover:-translate-y-1">
              <FaHelmetSafety className="text-5xl text-white" />
            </div>
            <p className="text-xl py-4 ">Construction Site</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full bg-slate-950 flex justify-center items-center w-28 h-28 hover:bg-red-700 transition ease-in-out hover:scale-110 hover:-translate-y-1">
              <FaCar className="text-5xl text-white" />
            </div>
            <p className="text-xl py-4 ">Parking Security</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full bg-slate-950 flex justify-center items-center w-28 h-28 hover:bg-red-700 transition ease-in-out hover:scale-110 hover:-translate-y-1">
              <BsBuildingFillLock className="text-5xl text-white" />
            </div>
            <p className="text-xl py-4 ">Safe Zone</p>
          </div>
        </div>
    </motion.div>



  );
}

export default Products