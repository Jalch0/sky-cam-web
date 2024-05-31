'use client'
import Image from "next/image";
import Link from "next/link";
import LogoSkyCam from "@/app/images/LogoSkyCam.png"
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import { links } from "@/app/libs/data"
import clsx from "clsx";
import { motion } from 'framer-motion'


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        setIsMounted(true);
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        if (window.innerWidth > 1024) {
            setIsOpen(true);
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 1024) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [windowWidth]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    if (!isMounted) {
        return null;
    }

    return (
      <header className="fixed z-50 w-full">
        <motion.div 
        className="relative min-h-20 shadow-md"
        initial={{ y: -100, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        >
          <nav className="min-h-20 flex items-center xs:justify-center lg:justify-between lg:py-2 lg:px-36 xl:px-24 ph:py-2 bg-slate-50">
            <Link href="/">
              <Image src={LogoSkyCam} alt="logo" className="h-10 w-36" />
            </Link>
            {windowWidth < 1024 && (
              <div onClick={toggleMenu}>
                <GiHamburgerMenu className="xl:hidden xs:absolute text-slate-800 text-3xl top-6 sm:left-20 xs:left-5 cursor-pointer" />
              </div>
            )}
            <ul
              className={`overflow-hidden	 text-slate-800 tracking-wider text-mdp lg:flex lg:flex-row lg:bg-transparent lg:static xl:left-auto xl:top-auto lg:w-auto xs:flex-col xs:bg-zinc-200 xs:absolute xs:left-0 xs:top-full xs:w-full xs:px-5 transform transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              {links.map((link) => (
                <li
                  key={link.hash}
                  className={clsx(
                    "lg:px-7 lg:border-r-[1px] uppercase lg:border-b-0 lg:hover:bg-transparent lg:border-slate-800 xs:py-3 xs:border-b-[1px] xs:border-zinc-100 xs:hover:bg-zinc-300 transition-all",
                    { "text-red-600": activeSection === link.name }
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <Link href={link.hash} className="cursor-pointer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </header>
    );
}

export default Navbar;