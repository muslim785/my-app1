
import React from 'react'
import Image from 'next/image'
import logo from "@/app/assets/logo (1).png"


function Navbar() {
    return (
        <>
            <div className='bg-[#043873] w-screen h-14 py-6 px-[180px] pb-5'>
                <nav className='flex items-center justify-between text-white'>
                    <div className="logo flex items-center gap-2">
                        <Image src={logo} alt='logo' width={25} height={25} />
                        <h1 className='font-semibold'>Whitepace</h1>
                    </div>
                    <div className="navMenu flex items-center justify-between gap-20">
                        <ul className='flex items-center gap-5 opacity-90 text-base'>
                            <li className='cursor-pointer hover:text-gray-300'>Products</li>
                            <li className='cursor-pointer hover:text-gray-300'>Solutions</li>
                            <li className='cursor-pointer hover:text-gray-300'>Resources</li>
                            <li className='cursor-pointer hover:text-gray-300'>Pricing</li>
                        </ul>
                        <div className="navButton">
                            <button className='bg-[#ffe494] hover:bg-[#ffe600] py-2 px-6 rounded text-[#043873]'>Login</button>
                        </div>
                    </div>
                </nav>
                <div className='w-screen h-[0.5px] mt-5 -ml-[14vw]  bg-white opacity-50'></div>
            </div>
        </>
    )
}

export default Navbar
