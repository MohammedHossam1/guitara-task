import ImageFallBack from '@/components/shared/image-fall-back'
import React from 'react'

const BottomSection = () => {
    const data = [
        {
            image: "/cart/troph.svg",
            title: "High Quality",
            desc: "crafted from top materials"
        },
        {
            image: "/cart/check.svg",
            title: "Warranty Protection",
            desc: "Over 2 years"
        },
        {
            image: "/cart/shipping.svg",
            title: "Free Shipping",
            desc: "Order over 150 $"
        },
        {
            image: "/cart/customer-support.svg",
            title: "24 / 7 Support",
            desc: "Dedicated support"
        },
    ]
    return (
        <div className='custom-container bg-[#FAF3EA] py-10 lg:py-20 max-lg:flex items-center justify-center '>
            <div className=" md:flex items-center gap-4 md:justify-between flex-wrap max-lg:w-fit max-md:space-y-7 ">
                {data.map((item, index) => (
                    <div key={index} className='flex    items-center gap-2'>
                        <ImageFallBack width={100} height={100} src={item.image} alt={item.title} className='w-8 xl:w-12 ' />
                        <div className="">
                            <h3 className='text-lg xl:text-2xl font-semibold'>{item.title}</h3>
                            <p className='text-sm xl:text-base text-[#898989]'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BottomSection