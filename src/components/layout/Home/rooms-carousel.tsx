'use client'
import { CustomCarousel } from '@/components/shared/custom-carousel'
import { Button } from '@/components/ui/button'
import { ProductsData } from '@/data'
import {motion} from 'framer-motion'
const RoomsCarousel = () => {
    return (
        <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='bg-[#FCF8F3] py-10 '>
            <div className="xl:ps-[6rem]">
                <div className="flex max-lg:flex-col gap-5 xl:gap-10 items-center">
                    <div className="space-y-3 lg:space-y-5 px-10">
                        <h2 className='text-xl lg:text-3xl xl:text-4xl text-[#3a3a3a] font-bold'>50+ Beautiful rooms
                            inspiration</h2>
                        <p className='text-sm xl:text-base font-medium text-[#616161]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        <Button className=" p-5  lg:px-8 lg:py-6 text-base font-semibold ">Explore More</Button>

                    </div>
                    <CustomCarousel arrows data={ProductsData} />
                </div>
            </div>
        </motion.section>
    )
}

export default RoomsCarousel