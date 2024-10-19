import React, { useState } from 'react'
import SectionTitle from '../../component/SectionTitle'
import { courses } from '../../resources/courses'
const  Course = () => {
    const [selectedItemIndex, setSetlectedItemIndex] = useState(0)

    return (
        <div>
            <SectionTitle title="Courses" />

            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='flex flex-col gap-10 border-l-2 border-[#20716184] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ' >

                    {courses.map((course, index) => (
                        <div onClick={() => {
                            setSetlectedItemIndex(index)
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 
                            
                            ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0e74656e] py-3 " : "text-white"

                                }`} >{course.title}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col' >
                    <img src={courses[selectedItemIndex].image} alt='' className='h-60 w-72 ' />
                    <div className='flex flex-col gap-5' >
                        <h1 className='text-secondary text-2xl'>{courses[selectedItemIndex].title}</h1>
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

export default Course
