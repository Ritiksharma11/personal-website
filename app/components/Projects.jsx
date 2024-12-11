import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import project1 from '../../public/project1.jpg'
import project2 from '../../public/project2.jpg'
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col my-4'>
            <h1 className='text-3xl lg:text-5xl pb-2 border-b-4 mb-8 border-sky-500 font-semibold'>Projects</h1>
            <div className='flex flex-col justify-center items-center gap-10'>
                {/* projects  */}
                <div className="project w-full max-w-3xl flex flex-col md:flex-row md:gap-10 border-2 border-white p-4 md:p-6 rounded-xl">
                    <Image src={project1} alt='project1' width={400} height={200} className='bg-cover h-40 mb-2' ></Image>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold '>Todo App</h1>
                        <p className='text-lg md:text-xl mt-2 mb-4'>A simple Todo App built using HTML,CSS and JavaScript.Todos can be saved in LocalStorage</p>
                        <div className="links flex gap-5 text-xl  my-2">
                            <Link href='https://github.com/Ritiksharma11/js-todo-localstorage' target='_blank' ><FaGithub /></Link>
                            <Link href='https://jstodolocalstorage.vercel.app/' target='_blank'><FaArrowUpRightFromSquare /></Link>
                        </div>
                    </div>
                </div>

                {/* project2 */}

                <div className="project w-full max-w-3xl flex flex-col md:flex-row md:gap-10 border-2 border-white p-4 md:p-6 rounded-xl">
                    <Image src={project2} alt='project1' width={400} height={200} className='bg-cover h-40 mb-2' ></Image>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold '>Rest Countries</h1>
                        <p className='text-lg md:text-xl mt-2 mb-4'>Get Information about countries.Built using ReactJs,TailwindCSS and REST Countries API</p>
                        <div className="links flex gap-5 text-xl  my-2">
                            <Link href='https://github.com/Ritiksharma11/Rest-countries' target='_blank'><FaGithub /></Link>
                            <Link href='https://rest-countries-molvl3rzv-ritiksharma11.vercel.app/' target='_blank'><FaArrowUpRightFromSquare /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects