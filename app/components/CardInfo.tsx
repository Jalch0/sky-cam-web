"use client"
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";
import React from 'react'



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
        <div className="sm:px-0 md:mr-14 mr-0 xs:px-10 px-24 text-neutral-600 2xl:w-1/3 md:w-1/2 w-full">
          <h2 className="text-4xl pb-4 sm:text-start text-center ">
            BUILDING EXTRAORDINARY HOMES
          </h2>
          <p className="sm:text-xl text-lg pb-3 leading-relaxed ">
            With over 18 years of experience, Keystone Construction offers
            beautiful high quality custom home building and renovation
            services in the Bloomington, Indiana area.
          </p>
          <div className="w-12 h-[1.5px] bg-red-500 " />
          <p className="pt-3 pb-10 leading-relaxed sm:text-lg text-md text-justify">
            Our dedicated team will help you through the process of a new build
            or remodel to make it straightforward and enjoyable, ensuring
            that your home reflects your individual taste.
            With every unique project, our mission is to serve you by
            building or renovating the home
            of your dreams.
          </p>
          <div className="xl:text-start text-center">
            <Link
              href="#products"
              className="px-14 py-4 bg-white text-slate-700 rounded-[2.5rem] border border-slate-700 hover:text-white hover:bg-slate-700 transition tracking-widest"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className="py-12 xl:py-0 w-full xl:w-1/3 flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dfrphr9rl/image/upload/v1717211617/hsldzqieaumflkggdzcv.jpg"
            }
            alt="ImgSec"
            width={500}
            height={250}
            objectFit="cover"
            className="xl:w-[600px] sm:w-[600px] h-[400px] w-[300px] px-5 object-cover"
          />
        </div>
      </div>


          {/* 2 */}
      <div className="xl:flex xl:flex-row xl:justify-center xl:items-center xl:pt-14 flex flex-col items-center w-full sm:w-3/4 mb-14">
        <div className="sm:px-0 sm:ml-14 ml-0 xs:px-10 px-24 text-neutral-600 2xl:w-1/3 md:w-1/2 w-full xl:order-2 order-0">
          <h2 className="text-4xl pb-4 sm:text-start text-center">
            BUILDING EXTRAORDINARY HOMES
          </h2>
          <p className="sm:text-xl text-lg pb-3 leading-relaxed">
            With over 18 years of experience, Keystone Construction offers
            beautiful <br /> high quality custom home building and renovation
            services in the
            <br /> Bloomington, Indiana area.
          </p>
          <div className="w-12 h-[1.5px] bg-red-500" />
          <p className="pt-3 pb-10 leading-relaxed sm:text-lg text-md text-justify">
            Our dedicated team will help you through the process of a new build
            or remodel to make <br /> it straightforward and enjoyable, ensuring
            that your home reflects your individual taste.
            <br /> With every unique project, our mission is to serve you by
            building or renovating the home
            <br /> of your dreams.
          </p>
          <div className="xl:text-start text-center">
            <Link
              href="#products"
              className="px-14 py-4 bg-white text-slate-700 rounded-[2.5rem] border border-slate-700 hover:text-white hover:bg-slate-700 transition tracking-widest"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className="py-12 xl:py-0 w-full xl:w-1/3 flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dfrphr9rl/image/upload/v1717468748/kkqltthzckpx1dmdsigk.jpg"
            }
            alt="ImgSec"
            width={500}
            height={250}
            objectFit="cover"
            className="xl:w-[600px] sm:w-[600px] h-[400px] w-[300px] px-5 object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default CardInfo