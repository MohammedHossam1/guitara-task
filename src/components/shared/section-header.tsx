import React from 'react'

const SectionHeader = ({ title, description }: { title: string, description?: string }) => {
    return (
        <div className='text-center space-y-2 mb-8'>
            <h2 className='text-4xl font-bold text-text-color'>{title}</h2>
            {description && <p className='text-xl text-[#666666]'>{description}</p>}
        </div>
    )
}

export default SectionHeader