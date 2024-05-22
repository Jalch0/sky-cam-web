'use client'
import Image from "next/image";
import Link from "next/link";
import LogoSkyCam from "@/app/images/LogoSkyCam.png"
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isMounted, setIsMounted] = useState<boolean>(false);

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

    return(
    <header className="min-h-20 shadow-md relative z-50">
        <nav className="min-h-20 flex items-center xs:justify-center lg:justify-between lg:py-2 lg:px-36 xl:px-72 ph:py-2 bg-slate-50">
            <Link href="/">
                <Image src={LogoSkyCam} alt="logo" className="h-10 w-36"/>
            </Link>
            {windowWidth < 1024 && (
                <div onClick={toggleMenu}>
                    <GiHamburgerMenu className="xl:hidden xs:absolute text-slate-800 text-3xl top-6 sm:left-20 xs:left-5 cursor-pointer"/>
                </div>
            )}
                <ul className={`overflow-hidden	 text-slate-800 tracking-wider text-xsp lg:flex lg:flex-row lg:bg-transparent lg:static xl:left-auto xl:top-auto lg:w-auto xs:flex-col xs:bg-zinc-200 xs:absolute xs:left-0 xs:top-full xs:w-full xs:px-5 transform transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="lg:px-7 lg:border-r-[1px] lg:border-b-0 lg:hover:bg-transparent lg:border-slate-800 xs:py-3 xs:border-b-[1px] xs:border-zinc-100 xs:hover:bg-zinc-300 transition-all"><Link href='/' className="hover:text-red-600 transition-all">ABOUT</Link></li>
                    <li className="lg:px-7 lg:border-r-[1px] lg:border-b-0 lg:hover:bg-transparent lg:border-slate-800 xs:py-3 xs:border-b-[1px] xs:border-zinc-100 xs:hover:bg-zinc-300 transition-all"><Link href='/' className="hover:text-red-600 transition-all">SERVICES</Link></li>
                    <li className="lg:px-7 lg:border-r-[1px] lg:border-b-0 lg:hover:bg-transparent lg:border-slate-800 xs:py-3 xs:border-b-[1px] xs:border-zinc-100 xs:hover:bg-zinc-300 transition-all"><Link href='/' className="hover:text-red-600 transition-all">REVIEWS</Link></li>
                    <li className="lg:px-7 lg:border-r-[1px] lg:border-b-0 lg:hover:bg-transparent lg:border-slate-800 xs:py-3 xs:hover:bg-zinc-300 transition-all"><Link href='/' className="hover:text-red-600 transition-all">CONTACT</Link></li>
                </ul>
        </nav>
    </header>
    )
}

export default Navbar;