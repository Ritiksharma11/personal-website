'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navItems = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    },
    {
        label: "Contact",
        page: "contact"
    }
]

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <>
            <div className='sticky top-0 right-0 backdrop-blur-3xl  z-50 w-full py-2 px-4 md:px-8 lg:px-16 md:py-3 border-b-2'>
                <div className='flex justify-between items-center'>
                    <div className="text-2xl md:text-4xl font-bold "><Link href={'#home'}>RitikS.</Link></div>
                    <div className='hidden md:flex md:space-x-16 text-xl'>
                        {
                            navItems.map((item, index) => (
                                <Link className='hover:text-blue-300 ease-in-out duration-300 ' key={index} href={`#${item.page}`}>{item.label}</Link>
                            ))
                        }
                    </div>
                    <button onClick={() => setisOpen((prev) => !prev)} className='block md:hidden' >
                        {
                            isOpen ? <IoClose className='text-2xl' /> : <GiHamburgerMenu />
                        }
                    </button>
                </div>
                {
                    isOpen && (
                        <div className='flex flex-col bg-slate-800 fixed top-[3.1rem] right-1 md:hidden space-y-8 p-4 '>
                            {
                                navItems.map((item, index) => (
                                    <a className='hover:text-blue-300 ease-in-out duration-300 ' key={index} href={`#${item.page}`}>{item.label}</a>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar