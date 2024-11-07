
import React from 'react'
import Image from 'next/image'
import apple from "@/app/assets/apple.png"
import microsoft from "@/app/assets/microsoft.png"
import google from "@/app/assets/google.png"
import slack from "@/app/assets/slack.png"

function Sponsors() {
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold my-16'>Our Sponsors</h1>
            <div className="sponsors flex items-center mb-16 justify-center gap-52">
                <Image src={apple} className='' width={40} height={62} alt='apple' />
                <Image src={microsoft} className='' width={130} height={62} alt='microsoft' />
                <Image src={slack} className='' width={130} height={62} alt='slack' />
                <Image src={google} className='' width={130} height={62} alt='google' />
            </div>
        </div>
    )
}

export default Sponsors
