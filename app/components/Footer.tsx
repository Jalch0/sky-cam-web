import React from 'react'
import LogoSkyCam from '@/app/images/LogoSkyCam.png'
import Image from 'next/image'
import { FaBuilding } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <div className='pt-14 w-full bg-neutral-200 px-10'>
        <div className='flex sm:justify-between flex-col items-center lg:items-start lg:gap-10 lg:flex-row w-full'>
          {/* Left */}
          <div className='sm:w-96 flex flex-col items-center gap-4'>
            <Image
            src={LogoSkyCam}
            alt='Logo SkyCam'
            width={170}
            />
            <p className='leading-6 sm:px-0 px-5'>Our mission is to provide top-tier mobile surveillance services using state-of-the-art trailer units to ensure the safety and security of our clients assets and properties. We are committed to delivering reliable, flexible, and efficient security solutions tailored to meet the unique needs of each client.</p>
            <Link
            href="#home"
            className='py-2 px-4 bg-red-600 rounded text-white hover:scale-110 hover:-translate-y-1 transition hover:bg-white hover:text-red-600'
            ><span className='flex items-center'>Contact us!<FaLocationArrow /></span></Link>
          </div>
          {/* Center */}
          <div className='flex flex-col justify-start xs:py-12 lg:py-0 py-12'>
              <h3 className='text-2xl text-center font-bold pb-4'>LOCATION</h3>
             <span className='flex gap-2 items-center text-md pb-1'><FaBuilding className='text-red-600 text-lg'/> <p className=''>1918A Jordan Ln NW</p></span>
             <span className='flex gap-2 items-center text-md pb-1'><FaPhoneAlt className='text-red-600 text-lg'/> <p className=''>+1 256 714 7099</p></span>
             <span className='flex gap-2 items-center text-md'><IoMailOpen className='text-red-600 text-lg'/> <p className=''>ai@sky-cam.com</p></span> 
          </div>
          {/* Right */}
          <div className='sm:w-[600px] w-[300px]'>
            {/* @ts-ignore */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6556.575752133622!2d-86.63927208297122!3d34.748340431257006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b97cbb983df%3A0x95ffbbe4df4af079!2s1918a%20Jordan%20Ln%20NW%2C%20Huntsville%2C%20AL%2035816%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1717042287995!5m2!1ses!2sve" width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='py-6 text-center w-full'>
            <p className='font-bold'>Copyright © 2024 Sky-Cam | Mobile Surveillance Trailers - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer