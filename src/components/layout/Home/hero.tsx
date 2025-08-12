'use client'
import ImageFallBack from '@/components/shared/image-fall-back'
import { Button } from '@/components/ui/button'
import {motion} from 'framer-motion'
const Hero = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        
        className="flex relative justify-center items-center h-[calc(100dvh-4rem)] w-full  ">
            <ImageFallBack src="/home/hero.png" alt="Logo" width={2000} height={2000} className="w-full h-full" />
            <div className="absolute bottom-1/2  md:w-5/8 xl:w-3/8  max-md:translate-y-1/2  end-5 md:bottom-20  max-md:start-5 md:end-20 rounded-xl bg-secondary">
                <div className=" p-7 lg:p-10   lg:py-15 w-full space-y-7">
                    <div className="space-y-2">
                        <p className="text-base font-semibold tracking-widest"> New Arrival</p>
                        <h1 className="text-2xl lg:leading-[65px] lg:text-5xl font-bold text-main xl:w-3/4">Discover Our New Collection</h1>
                        <p className="text-base text-text-color font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                    <Button className=" px-8 py-5 lg:px-12 lg:py-8 text-base font-bold uppercase">BUY Now</Button>
                </div>
            </div>
        </motion.div >
    )
}

export default Hero