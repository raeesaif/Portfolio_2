import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";

const LeftSider = () => {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static ' >
            <div className='flex flex-col  items-center'>
                <div className='flex flex-col gap-5 sm:flex-row cursor-pointer '>
                    <RiFacebookCircleLine className='text-gray-600 ' />
                    <GoMail className='text-gray-600 ' />
                    <FaInstagram className='text-gray-600 ' />
                    <CiLinkedin className='text-gray-600 ' />
                    <SiGithub className='text-gray-600 ' />
                </div>
                <div className='w-[1px] h-32 bg-[#0e66587e]  sm:hidden ' ></div>
            </div>
        </div>
    )
}

export default LeftSider
