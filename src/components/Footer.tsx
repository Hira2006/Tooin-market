
import React from 'react'
import Image from 'next/image'
import { BiMap } from 'react-icons/bi'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsTelephone} from "react-icons/bs"
import img from "../../public/Logo.png";
import { AiFillMail, AiOutlineArrowRight } from 'react-icons/ai'
import {RiVisaLine} from "react-icons/ri"
import {FaFacebook, FaGooglePay, FaInstagram, FaTwitter} from "react-icons/fa"
import { GrAmex, GrPaypal} from "react-icons/gr"

const Footer = () => {
  return (
    <div className=''>
            <div className='border-t-2 mx-48 border-gray-200 hidden lg:block justify-between items-center pt-8 px-12 mt-5 w-[96ch]'>
</div>
    <div className='grid text-black justify-evenly lg:grid-cols-4 grid-cols-1'>
        <div className='lg:ml-24 ml-8 space-y-8 '>
        <Image src={img} alt="logo" width={500} height={500} className='lg:w-[96px] w-[72px]'/>
        <ul className='space-y-2'>
        <li className='flex'><BiMap className='text-[40px] lg:pr-2'/>Little Hawks School,Islamabad</li>
        <li className=' hidden lg:block'><HiOutlineMailOpen className='text-[32px] lg:pr-2'/>charleswalles2006@gmail.com</li>
        <li className='flex'><BsTelephone className='text-[32px] pr-2'/>03335196002</li>
        </ul>
        </div>

        <div className='space-y-6 lg:ml-24 ml-12 '>
            <h3 className='font-bold text-lg'>Information</h3>
            <ul className='space-y-3'>
                <li>About Us</li>
                <li>Careers</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
            </ul>
        </div>

        <div className='space-y-6 lg:ml-0 ml-12 '>
            <h3 className='font-bold text-lg'>Customer Service</h3>
            <ul className='space-y-3'>
                <li>Shipping Policy</li>
                <li>Help & Contact Us</li>
                <li>Returns & Refunds</li>
                <li>Online Stores</li>
                <li>Terms & Condition</li>
            </ul>
        </div>

        <div className='pr-8 lg:pl-0 pl-16'>
            <h2 className='font-bold text-lg '>Subscribe</h2>
            <p className=''>Enter your email below to be the first to know about new collections.</p>
            <div className='flex border-2 border-accent px-6 py-2 w-full bg-gray-200 rounded-lg'>
            <AiFillMail className="lg:text-[32px] hidden lg:block"/>
            <input className="w-full bg-gray-200" type='text' placeholder='   Your Email'/>
            <AiOutlineArrowRight className="lg:text-[32px] hidden lg:block"/>
        </div>
        </div>
    </div>
    <div className='hidden lg:block'>
    <div className='border-t-2 mx-48 border-gray-200 flex justify-between items-center py-8 px-12 mt-10 w-[96ch]'>
        <div className='flex justify-evenly lg:gap-x-48 lg:grid-cols-3 grid-cols-1'>
            <div className='flex gap-x-8'>
                <RiVisaLine className="text-[32px] hidden lg:block" />
                <FaGooglePay className="text-[32px] hidden lg:block"/>
                <GrAmex className="text-[32px] hidden lg:block" />
                <GrPaypal className="text-[32px] hidden lg:block" />
            </div>
            <p className='text-lg text-gray-600 flex'>Copyright © 2022 Weird. All rights reserved</p>
        </div>
        <div className='flex gap-x-8 '>
        <FaFacebook className="text-[32px] hidden lg:block"/>
        <FaInstagram className="text-[32px] hidden lg:block"/>
        <FaTwitter className="text-[32px] hidden lg:block"/>
        </div>
        </div>
        </div>
    </div>

  )
}

export default Footer