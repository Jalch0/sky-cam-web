"use client"
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import { useSectionInView } from "../libs/hook";



function CardInfo() {


  return (

    <motion.div
      className="
    flex 
    flex-col 
    items-center
    pt-5
    w-full
    "
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="xl:flex xl:flex-row xl:justify-center xl:items-center xl:pt-14 flex flex-col items-center">
        <div className="md:mr-14 mr-0 xs:px-10 px-24 text-neutral-600 2xl:w-1/3 md:w-1/2 w-full">
          <h2 className="text-4xl pb-4 sm:text-start text-center text-red-300 font-bold">
            Sky-cam based in Huntsville, Alabama
          </h2>
          <p className="sm:text-xl text-lg pb-3 leading-relaxed text-justify">
          Our mission is to ensure optimal coverage and peace of mind for every client. Equipped with advanced technology, including a smart AI system and ample storage capabilities, our surveillance trailers are monitored 24/7 to deliver real-time video feeds and alerts, keeping you informed and secure at all times.
          </p>
          <div className="w-12 h-[1.5px] bg-red-300 mb-10" />
          <div className="xl:text-start text-center">
            <Link
              href="#products"
              className="px-14 py-4 bg-white text-red-300 font-bold rounded-[2.5rem] border border-red-300 hover:text-white hover:bg-red-300 transition tracking-widest"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className="py-12 xl:py-0 w-full xl:w-1/3 flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dfrphr9rl/image/upload/v1717988792/oaw5pophxzzkreiywrnx.jpg"
            }
            alt="ImgSec"
            width={500}
            height={250}
            objectFit="cover"
            className="h-[400px] w-[600px] px-5 object-cover"
          />
        </div>
      </div>


          {/* 2 */}
      <div className="xl:flex xl:flex-row xl:justify-center xl:items-center xl:pt-14 flex flex-col items-center w-full mb-14">
        <div className="lg:ml-14 ml-0 xs:px-10 px-24 text-neutral-600 2xl:w-1/3 md:w-1/2 w-full xl:order-2 order-0">
          <h2 className="text-4xl pb-4 sm:text-start text-center text-red-300 font-bold">
          Sky-cam offers cost-efficient options
          </h2>
          <p className="sm:text-xl text-lg pb-3 leading-relaxed">
          Our trailers are designed for maximum flexibility and ease of deployment, making them ideal for various applications such as construction site monitoring, event security, and remote facility surveillance. Whether you need short-term monitoring or long-term security solutions.
          </p>
          <div className="w-12 h-[1.6px] bg-red-300 mb-10" />
          <div className="xl:text-start text-center">
            <Link
              href="#products"
              className="px-14 py-4 bg-white text-red-300 rounded-[2.5rem] border border-red-300 hover:text-white hover:bg-red-300 font-bold transition tracking-widest"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className="py-12 xl:py-0 w-full xl:w-1/3 flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dfrphr9rl/image/upload/v1717988850/lvhuvlnlvxmvudxtzjsq.jpg"
            }
            alt="ImgSec"
            width={500}
            height={250}
            objectFit="cover"
            className="h-[400px] w-[600px] px-5 object-cover"
          />
        </div>
      </div>
    </motion.div>


  );
}

export default CardInfo