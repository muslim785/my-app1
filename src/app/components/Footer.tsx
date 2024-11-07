
import React from 'react'
import footer from "@/app/assets/Info.png"
import Image from 'next/image'

function Footer() {
    return (
        <div className='bg-[#043873] w-screen max-h-max'>
            <Image src={footer} width={9000} height={9000} className='px-32 py-16' alt='footer' />
            <hr className='h-1 opacity-20' />
            <div className="whitePace">
                <h1 className='text-center text-white py-3 px-4 opacity-90'>©2021 Whitepace LLC.</h1>
            </div>
        </div>
    )
}

export default Footer
