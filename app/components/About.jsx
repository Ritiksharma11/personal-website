import React from 'react'

const skills = [
    {
        id: 1,
        skill: 'HTML',
    },
    {
        id: 2,
        skill: 'CSS',
    },
    {
        id: 3,
        skill: 'JavaScript',
    },
    {
        id: 4,
        skill: 'TypeScript',
    },
    {
        id: 5,
        skill: 'React',
    },
    {
        id: 6,
        skill: 'Tailwind CSS',
    },
    {
        id: 7,
        skill: 'Next.js',
    },
    {
        id: 8,
        skill: 'Git',
    },
    {
        id: 9,
        skill: 'Node.js',
    },
    {
        id: 10,
        skill: 'Express.js',
    },
    {
        id: 11,
        skill: 'MongoDB',
    },
    {
        id: 12,
        skill: 'PostgreSQL',
    },
]

const About = () => {
    return (
        <div id='about' className='my-8  min-h-[70vh]'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold border-b-4 pb-1 border-sky-600 mb-5'>About Me</h1>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-semibold md:text-3xl mb-2'>Get to know me!</h1>
                    <p className='text-lg lg:text-xl'>Hi,my name is Ritik Sharma and I am a highly ambitious software developer.I graduated from CCS University with a Bachelor's Degree in Computer Science.I have a passion for technology and am always open to new opportunities.🙂</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-semibold md:text-3xl mb-4'>My Skills</h1>
                    <div className='flex flex-wrap justify-center items-center'>{
                        skills.map((skill) => (
                            <span className='py-1 px-4 bg-white m-2 flex justify-center items-center text-slate-900 rounded-md font-semibold ' key={skill.id}> {skill.skill}</span>
                        ))
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default About