import React, { useState } from 'react'
import SectionTitle from "../../component/SectionTitle"
import { porjects } from '../../resources/projects'
const Project = () => {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0)

    return (
        <div>
            <SectionTitle title="Experience" />
            <div className="flex py-10 gap-20 sm:flex-col ">
                <div className='flex flex-col gap-10 border-l-2 border-[#385d49] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ' >
                    {porjects.map((project, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index)
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-2xl px-5 
                            
                            ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0e74656e] py-3 " : "text-white"

                                }`}>{project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center  gap-10 sm:flex-col ">
                    <img src={porjects[selectedItemIndex].image} alt="" className='h-60 w-72' />
                    <div>
                        <h1 className="text-secondary text-2xl">{porjects[selectedItemIndex].title}</h1>
                        <p className='text-white'>{porjects[selectedItemIndex].description}</p>
                        <p className='text-white' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat illum deleniti pariatur quas tempore! Aliquam voluptatum tempore aut exercitationem fugit vel nihil eveniet,
                            sequi quo non delectus esse beatae similique.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
