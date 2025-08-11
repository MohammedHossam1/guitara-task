import ImageFallBack from '@/components/shared/image-fall-back'
import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
    return (
        <div className="flex relative justify-center items-center h-[calc(100vh-4rem)] w-full  ">
            <ImageFallBack src="/home/hero.png" alt="Logo" width={2000} height={2000} className="w-full h-full" />
            <div className="absolute bottom-20 end-20 rounded-xl bg-secondary p-10 py-15 w-full lg:w-3/8 space-y-7">
                <div className="space-y-2">
                    <p className="text-base font-semibold tracking-widest"> New Arrival</p>
                    <h1 className="text-2xl lg:leading-[65px] xl:text-5xl font-bold text-main lg:w-3/4">Discover Our New Collection</h1>
                    <p className="text-base text-text-color font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                </div>
                <Button className="px-12 py-8 text-base font-bold uppercase">BUY Now</Button>
            </div>
        </div >
    )
}

export default Hero