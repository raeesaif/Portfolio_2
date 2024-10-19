import React from 'react'
import SectionTitle from '../../component/SectionTitle'
const  About = () => {

    const skills = [
        "Javascript",
        "React",
        "Node",
        "Express",
        "MongoDB", 
    ]
    return (
        <>
            <div>
                <SectionTitle title="About" />

                <div className='flex w-full items-center sm:flex-col '>
                    <div className='h-[70vh] w-1/2 sm:w-full ' >
                        <lottie-player src="https://lottie.host/69b4ec04-5729-4a46-87b1-c663273e09bd/3RuMTa7nNC.json"
                            background="##FFFFFF"
                            speed="1"
                            autoplay direction="1">
                        </lottie-player>
                    </div>
                    <div className='flex flex-col gap-5 w-1/2 sm:w-full '>
                        <p className='text-white' >
                            Hello! My name is Sathyaprakash Reddy. I enjoy creating things that live on the
                            internet. My interest in web development started back in 2012 when I decided to try
                            editing custom Tumblr themes — turns out hacking together a custom reblog
                            button taught me a lot about HTML & CSS!
                        </p>
                        <p className='text-white'>
                            Fast-forward to today, and had the privilege of working at an advertising agency,
                            a start-up, a huge corporation, and a student-led design studio. My main focus these
                            days is building accessible, inclusive products and digital experiences at
                            Upstatement for a variety of clients. I recently launched a course that cm•ers
                            everything you need to build a web app with the Spotify API using Node & React.
                            Here are a few technologies I've been working with recently:
                        </p>
                    </div>

                </div>
                <div className='py-5'>
                    <h1 className='text-tertiary text-xl'>Here are a few technologies I've been working with recently:</h1>
                    <div className="flex flex-wrap gap-10 mt-5">
                        {skills.map((skill, index) => (
                            <div className="border border-tertiary py-3 px-5" >
                                <h1 className='text-tertiary'>{skill}</h1> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
