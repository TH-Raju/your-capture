"use client"

import { AllImages } from "@/assets/AllImage"
import Image from "next/image"

const TeamVisual = () => {
  return (
    <div className="my-28">
        <div className="lg:w-[72%] mx-auto ">
            <h2 className="text-center text-3xl font-bold my-8">Team Name: Visual Virtuosos</h2>
            <p className="text-center mx-2">Lens Legends, a dynamic photography duo driven by passion and creativity, leads the forefront of visual storytelling. With two visionary minds, each offering unique expertise, they capture timeless moments. Fuelled by curiosity and unwavering dedication, they fearlessly delve into human emotions, natural beauty, and worldly intricacies. Through their lens, a portal emerges, inviting viewers into a realm where reality merges with imagination.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-10 my-36 ">
            <div className="border border-site-color px-5 flex justify-between gap-5 items-center rounded-md">
                <Image src={AllImages.team.capture} alt="capture" className="h-28 w-fit"/>
                <div>
                    <h2 className="text-3xl font-bold">143</h2>
                    <p className="font-thin">Capture</p>
                </div>
            </div>
            <div className="border border-site-color px-5 flex justify-between gap-5 items-center rounded-md">
                <Image src={AllImages.team.view} alt="capture" className="h-32 w-fit"/>
                <div>
                    <h2 className="text-3xl font-bold">497</h2>
                    <p className="font-thin">Views</p>
                </div>
            </div>
            <div className="border border-site-color px-5 flex justify-between gap-5 items-center rounded-md">
                <Image src={AllImages.team.vote} alt="capture" className="h-32 w-fit"/>
                <div>
                    <h2 className="text-3xl font-bold">684</h2>
                    <p className="font-thin">Votes</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TeamVisual