import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiAlignRight } from "react-icons/bi";

export default function Navbar() {
    return (
        <div className='  flex justify-between items-center md:px-[60px] px-[20px] py-2 w-full absolute'>
            <div className='hidden md:flex space-x-[60px] text-lg font-semibold text-orange-600  hover:text-white'  >
                Muhammad Taneer
            </div>
            <div  >
                <ul className=' hidden md:flex space-x-[60px] text-lg font-semibold'>
                    <li className=' text-orange-600  hover:text-black pt-[8px]'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className=' text-orange-600  hover:text-black pt-[8px]'>
                        <Link href='/'>Service</Link>
                    </li>
                    <li className=' text-orange-600  hover:text-black pt-[8px]'>
                        <Link href='/'>About</Link>
                    </li>
                    <li className=' text-orange-600  hover:text-black pt-[8px]'>
                        <Link href='/'>Contact</Link>
                    </li>
                    <div>
                    <Image src='/Logo.png' alt='logo' width={60} height={60} />
                    </div>
                </ul>
            </div>
            <div className='static md:hidden text-3xl'><BiAlignRight /></div>
        </div>
    )
}