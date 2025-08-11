import ImageFallBack from '@/components/shared/image-fall-back'
import SectionHeader from '@/components/shared/section-header'
import { BrowseRangeData } from '@/data'
import React from 'react'

const BrowseRange = () => {
    return (
        <div className='custom-container'>
            <SectionHeader title="Browse Our Range" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <div className="flex flex-wrap gap-5 mt-5 lg:mt-16  ">
                {BrowseRangeData.map((item, ind) => (
                    <div key={ind} className='flex-basis-responsive cursor-pointer group ' >
                        <div className="rounded-xl overflow-hidden ">
                            <ImageFallBack src={item.imageSrc} alt={item.title} width={2200} height={2200} className='object-cover w-full rounded-xl group-hover:scale-105 transition-all duration-300 !h-[30rem]' />
                        </div>
                        <h3 className="text-2xl font-semibold mt-2 text-text-color  text-center">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BrowseRange