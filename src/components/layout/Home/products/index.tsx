'use client'
import { ProductCard } from './product-card'
import { ProductsData } from '@/data'
import { IProduct } from '@/types'
import SectionHeader from '@/components/shared/section-header'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Products = () => {
    return (
        <section className='custom-container'>
            <SectionHeader title="Our Products" />
            <div

                className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {ProductsData.slice(0, 8).map((product: IProduct, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15, // كل عنصر يتأخر شوي
                            ease: 'easeOut',
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='h-full'
                    >
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            image={product.image}
                            label={product?.label}
                        />
                    </motion.div>

                ))}
            </div>
            <Link href="/shop" className="mx-auto w-fit block"  >
                <Button className=" text-base font-semibold  m-auto my-6 py-4 lg:py-6 px-10 lg:px-20 " variant={"outline"}>Show More</Button>
            </Link>

        </section>
    )
}

export default Products