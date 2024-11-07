
"use client"
import Image from "next/image"
import URL from "@/app/assets/myWebsite.png"
import { FaArrowRight } from "react-icons/fa6";
import { sectionData } from "@/app/page"

// This is my hero section component

interface HeroProps {
    data: sectionData;
}

function Hero({ data }: HeroProps) {
    return (
        // My all data will show with the help of conditional renedring
        <>
            {data.topMain ? (
                <div className={`${data.mainBackground ? "bg-[#043873] text-white" : "bg-transparent text-black"} gap-16  block lg:flex items-center w-screen h-[80vh] bg-[#043873] p-40 justify-between`}>
                    {data.rightSection.isImage ? (<Image src={URL} width={450} height={450} alt="main photo" />) : (<div className={` ${data.rightSection.isBackground ? "bg-[#C4DEFD]" : "bg-transparent"} h-[55vh] w-[60vw] `}>
                    </div>)}
                    <div className={`ml-4 ${data.textCenter ? "text-center -ml-[46vw]" : "text-left"}`}>
                        <h1 className="text-5xl mr-5 font-bold mb-5">{data.title}</h1>
                        <p className="text-base opacity-70 mb-12">{data.paragraph}</p>
                        {<button className={`${data.textCenter ? "ml-[35vw]" : "ml-0"} bg-[#4F9CF9] flex items-center justify-center gap-2 py-3 px-4 font-semibold text-white rounded hover:bg-[#366aaa]`}>{data.button} <FaArrowRight /></button>}
                    </div>
                </div >
            ) : (
                <div className={`${data.mainBackground ? "bg-[#043873] text-white" : "bg-transparent text-black"} block lg:flex items-center w-screen h-[80vh] bg-[#043873] p-40 justify-between`}>
                    <div className="ml-4">
                        <h1 className="text-5xl mr-5 font-bold mb-5">{data.title}</h1>
                        <p className="text-base opacity-70 mb-12">{data.paragraph}</p>
                        {<button className="bg-[#4F9CF9] flex items-center justify-center gap-2 py-3 px-4 font-semibold text-white rounded hover:bg-[#366aaa]">{data.button}  <FaArrowRight /></button>}
                    </div>
                    {data.rightSection.isImage ? (<Image src={URL} width={450} height={450} alt="main photo" />) : (<div className={` ${data.rightSection.isBackground ? "bg-[#C4DEFD]" : "bg-transparent"} h-[55vh] w-[60vw] `}>
                    </div>)}
                </div >
            )
            }
        </>
    )
}

export default Hero
