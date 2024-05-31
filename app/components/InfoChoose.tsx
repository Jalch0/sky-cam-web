'use client'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { PiSecurityCameraBold } from "react-icons/pi";
import { motion } from "framer-motion";



function InfoChoose() {
  return (
    <motion.div className="flex flex-col items-center py-24 px-10 sm:px-0"
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row gap-10 pb-10">
        <div className="shadow-lg flex flex-col items-center rounded-lg px-24 py-16 hover:translate-y-2 hover:translate-x-2 hover:bg-gray-100 transition cursor-pointer text-center">
          <span className="pb-1">
            <PiSecurityCameraBold className="text-red-600 text-4xl" />
          </span>
          <p className="text-xl font-bold">Secure System</p>
        </div>
        <div className="shadow-lg flex flex-col items-center rounded-lg px-24 py-16 hover:translate-y-2 hover:translate-x-2 hover:bg-gray-100 transition cursor-pointer text-center">
          <span className="pb-1">
            <AiFillLike className="text-red-600 text-4xl" />
          </span>
          <p className="text-xl font-bold">Customer Satisfaction</p>
        </div>
        <div className="shadow-lg flex flex-col items-center rounded-lg px-24 py-16 hover:translate-y-2 hover:translate-x-2 hover:bg-gray-100 transition cursor-pointer text-center">
          <span className="pb-1">
            <FaCircleCheck className="text-red-600 text-4xl" />
          </span>
          <p className="text-xl font-bold">Quality Support</p>
        </div>
      </div>

      <div className='text-center lg:px-0 px-12'>
        <p className='text-xl pb-3'>
          With deep expertise that spans across the trailer security spectrum,
          we can optimize your transport protection at any level.
        </p>
        <p className='text-xl'>
          Whether you are interested in partial security upgrades, full-scale
          security system installations, or something in between, Sky Cam
          is here for you.
        </p>
      </div>

    </motion.div>
  );
}

export default InfoChoose