import React from 'react'

const  Intro = () => {
    return (

        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
            <h1 className='text-white' >Hi , I am</h1>                                              {/* you can  change name with your name and also change paragraph*/}
            <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'> Raees Ahmed </h1>
            <h1 className=' text-6xl sm:text-3xl  text-white font-semibold'>I build things for the web</h1>
            <p className='text-white w-2/3 ' >
                I am Fullstack Web Developer/instructor, currently, I am working as a React Developer in India. also sharing my knowledge to the student that I have gained in my carrier through online teaching across the world
            </p>
            <button className='border-2 border-tertiary text-tertiary rounded px-10 py-3'
            > Get Started</button>
        </div>
    )
}

export default Intro
