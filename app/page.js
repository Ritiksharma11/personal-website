import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'

const Home = () => {
  return (
    <div className='flex flex-col px-4 md:px-8 lg:px-16'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home