import { CustomCarousel } from '@/components/shared/custom-carousel'
import { Button } from '@/components/ui/button'
import { ProductsData } from '@/data'
import React from 'react'

const RoomsCarousel = () => {
    return (
        <section className='bg-[#FCF8F3] py-10 '>
            <div className="lg:ps-[6rem]">
                <div className="flex gap-10 items-center">
                    <div className="space-y-5">
                        <h2 className='text-4xl text-[#3a3a3a] font-bold'>50+ Beautiful rooms
                            inspiration</h2>
                        <p className='text-base font-medium text-[#616161]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        <Button className="px-8 py-6 text-base font-semibold ">Explore More</Button>

                    </div>
                    <CustomCarousel arrows data={ProductsData} />
                </div>
            </div>
        </section>
    )
}

export default RoomsCarousel