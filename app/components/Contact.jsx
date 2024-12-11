import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
    return (
        <div id='contact' className='mb-5'>
            <h1 className='border-b-2 text-3xl md:text-4xl font-bold border-sky-500 mt-8 mb-8'>Contact Me</h1>
            <div className='flex justify-between items-center mb-5 mx-2 lg:mx-4'>
                <div>
                    <p className='text-lg'><span className='font-bold text-xl'>Email: </span>ritiksharma1192@gmail.com</p>
                </div>
                <div className="social flex text-2xl gap-5">
                    <Link href='https://github.com/Ritiksharma11' target="_blank"> <FaGithub className=' hover:scale-125 duration-300 ' /></Link>
                    <Link href='https://www.linkedin.com/in/ritiksharma-dev/' target="_blank"><FaLinkedin className=' hover:scale-125 duration-300' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Contact