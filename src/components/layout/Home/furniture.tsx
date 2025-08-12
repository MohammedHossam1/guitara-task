'use client'
import ImageFallBack from '@/components/shared/image-fall-back'
import SectionHeader from '@/components/shared/section-header'
import { ProductsData } from '@/data'
import { motion } from 'framer-motion'
const variantsLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
}

const Furniture = () => {
    return (
        <div className="py-10">
            <p className='text-lg text-[#616161] text-center font-semibold'>Share your setup with</p>
            <SectionHeader title='#FuniroFurniture' />

            <div
                className="
                    grid gap-4
                    max-lg:grid-cols-3
                    max-md:grid-cols-2
                    lg:grid-cols-12 lg:grid-rows-10
                    lg:h-[50rem]
                "
            >
                {/* 1 */}
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once:true}}

                    variants={variantsLeft}
                    className="max-lg:col-span-1 max-lg:row-span-1 lg:row-span-5">
                    <ImageFallBack {...imgProps(0, "Image 1")} />
                </motion.div>

                {/* 2 */}
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    variants={variantsLeft}
                    transition={{ delay: 0.2 }}
                    viewport={{once:true}}
                    className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-2 lg:row-span-5 lg:col-start-1 lg:row-start-6">
                <ImageFallBack {...imgProps(1, "Image 2")} />
            </motion.div>

            {/* 3 */}
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={variantsLeft}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-4 lg:row-span-4 lg:col-start-2 lg:row-start-2">
                <ImageFallBack {...imgProps(2, "Image 3")} />
            </motion.div>

            {/* 4 */}
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={variantsLeft}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-2 lg:row-span-6 lg:col-start-6 lg:row-start-3">
                <ImageFallBack {...imgProps(3, "Image 4")} />
            </motion.div>

            {/* 5 */}
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={variantsLeft}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-3 lg:row-span-4 lg:col-start-3 lg:row-start-6">
                <ImageFallBack {...imgProps(4, "Image 5")} />
            </motion.div>

            {/* 6 */}
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={variantsLeft}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-3 lg:row-span-4 lg:col-start-8 lg:row-start-2">
                <ImageFallBack {...imgProps(5, "Image 6")} />
            </motion.div>

            {/* 7 */}
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={variantsLeft}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-2 lg:row-span-5 lg:col-start-11 lg:row-start-1">
                <ImageFallBack {...imgProps(6, "Image 7")} />
            </motion.div>

            {/* 8 */}
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={variantsLeft}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-2 lg:row-span-5 lg:col-start-8 lg:row-start-6">
                <ImageFallBack {...imgProps(7, "Image 8")} />
            </motion.div>

            {/* 9 */}
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={variantsLeft}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="max-lg:col-span-1 max-lg:row-span-1 lg:col-span-2 lg:row-span-4 lg:col-start-10 lg:row-start-6">
                <ImageFallBack
                    width={1400}
                    height={1400}
                    src={ProductsData[8].image}
                    alt="Image 9"
                    className="h-full w-full object-cover"
                />
            </motion.div>
        </div>
        </div >
    )
}

// Helper function for repeated props
const imgProps = (index: number, alt: string) => ({
    width: 400,
    height: 400,
    src: ProductsData[index].image,
    alt,
    className: "h-full w-full object-cover"
})

export default Furniture
