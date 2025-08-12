'use client'
import { motion } from 'framer-motion'
const SectionHeader = ({ title, description }: { title: string, description?: string }) => {
    return (
        <motion.div

            className='text-center space-y-2 mb-8'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className='text-2xl lg:text-4xl font-bold text-text-color'>{title}</motion.h2>
            {description && <motion.p
                initial={{  opacity: 0, y: 20 }}
                whileInView={{  opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }} className='text-base lg:text-xl text-[#666666]'>{description}</motion.p>}
        </motion.div>
    )
}

export default SectionHeader