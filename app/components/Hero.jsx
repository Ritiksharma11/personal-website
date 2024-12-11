import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import photo from '../../public/photo.jpg'

const Hero = () => {
    return (
        <div id='home' className='min-h-[90vh] flex flex-col justify-center items-center my-4'>
            <div className='flex flex-col gap-10 md:gap-20 lg:gap-20 xl:gap-40 lg:flex-row justify-center items-center px-8 '>
                <div>
                    <Image src={photo} alt='Image' className='w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem]' ></Image>
                </div>

                <div className='max-w-2xl'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>👋 Hi, I'm Ritik Sharma</h1>
                    <h2 className='text-xl  text-justify md:text-2xl mt-2 md:mt-5'>I'm a <span>Frontend/FullStack Web Developer</span> specialized in building pixel-perfect interactive websites and web-applications</h2>
                    <div className='flex gap-8 mt-8 justify-center w-full '>
                        <button className='border font-semibold py-1 px-4 rounded-md border-blue-500 ' >Download CV</button>
                        <button className='py-1 px-4 font-semibold bg-white text-[#030617] rounded-md'><Link href="#contact">Contact Me</Link></button>
                    </div>
                </div>
            </div>
            <div className='mt-16 lg:mt-24'>
                <span className='text-xl md:text-2xl lg:text-3xl md:font-bold animate-bounce duration-500 '>
                    <Link href='#about'>
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-bounce duration-500'>
                            <path clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#ffffff" />
                        </svg>
                    </Link>
                </span>
            </div>
        </div>

    )
}

export default Hero