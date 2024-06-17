"use client";
import Image from "next/image";
import React, { useState } from "react";
import Image1 from "@/app/images/img1.png";
import Image2 from "@/app/images/img2.jpg";
import Image3 from "@/app/images/img3.jpg";
import { useSectionInView } from "../libs/hook";
import { motion } from "framer-motion";


function Projects() {
  const { ref } = useSectionInView("Products", 0.5);

  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <section ref={ref} id="products" className="w-full py-16">
      <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
      >
        <h2 className="text-center pb-12 text-4xl font-bold text-red-300 ">
          TAKE A LOOK AT OUR PRODUCTS
        </h2>
        <div
          className="
        flex 
        flex-col 
        items-center 
        gap-10
        px-10
        lg:flex-row 
        lg:items-start 
        lg:gap-0
        lg:px-0
        "
        >
          <div
            className="relative w-full h-[400px] group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative w-full h-full">
              <Image
                src={
                  "https://res.cloudinary.com/dfrphr9rl/image/upload/v1717990495/lglulum5stieykwp3lue.jpg"
                }
                alt="TrailersImage"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
              />
              <div
                className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${
                  hovered ? "opacity-50" : ""
                }`}
              ></div>
            </div>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect
                className={`stroke-current fill-none transition-all duration-300 ease-in-out ${
                  hovered
                    ? "stroke-white stroke-[1px] animate-draw"
                    : "stroke-transparent stroke-[1px] animate-undraw"
                }`}
                x="5"
                y="5"
                width="90"
                height="90"
              />
            </svg>

            <div
              className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-2xl font-bold text-center">
                Run Time - 70 hours<br/>
                Charge Time - 8 hours<br/>
                System Voltage - 24V DC<br/>
                Wind Rating Speed - 45 m/s
              </span>
            </div>
          </div>

          <div
            className="relative w-full h-[400px] group"
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <div className="relative w-full h-full">
              <Image
                src={
                  "https://res.cloudinary.com/dfrphr9rl/image/upload/v1717990672/l4ftugroy9nrx72argfo.jpg"
                }
                alt="TrailersImage"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
              />
              <div
                className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${
                  hovered2 ? "opacity-50" : ""
                }`}
              ></div>
            </div>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect
                className={`stroke-current fill-none transition-all duration-300 ease-in-out ${
                  hovered2
                    ? "stroke-white stroke-1 animate-draw"
                    : "stroke-transparent stroke-2 animate-undraw"
                }`}
                x="5"
                y="5"
                width="90"
                height="90"
              />
            </svg>
            <div
              className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${
                hovered2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-2xl font-bold text-center">
                No. of Solar Panel - 3<br/>
                Panel Wattage - 380W<br/>
                Panel Output - 1140W<br/>
                Panel Material - Monocrystal Silicon<br/>
              </span>
            </div>
          </div>
          <div
            className="relative w-full h-[400px] group"
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
          >
            <div className="relative w-full h-full">
              <Image
                src={
                  "https://res.cloudinary.com/dfrphr9rl/image/upload/v1717990619/q8hpdhz2zueamlclyj79.jpg"
                }
                alt="TrailersImage"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
              />
              <div
                className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${
                  hovered3 ? "opacity-50" : ""
                }`}
              ></div>
            </div>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect
                className={`stroke-current fill-none transition-all duration-300 ease-in-out ${
                  hovered3
                    ? "stroke-white stroke-1 animate-draw"
                    : "stroke-transparent stroke-2 animate-undraw"
                }`}
                x="5"
                y="5"
                width="90"
                height="90"
              />
            </svg>
            <div
              className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${
                hovered3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-2xl font-bold text-center">
                Type - Electric Mast<br/>
                Material - Galvanized Steel<br/>
                Extended Height - 20ft<br/>
                Certificate - CE, ISO9001, DOT Approved
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
