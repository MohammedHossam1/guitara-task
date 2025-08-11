import React from 'react'
import { ProductCard } from './product-card'
import { ProductsData } from '@/data'
import { IProduct } from '@/types'
import SectionHeader from '@/components/shared/section-header'
import { Button } from '@/components/ui/button'

const Products = () => {
    return (
        <section className='custom-container'>
            <SectionHeader title="Our Products" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {ProductsData.slice(0, 8).map((product: IProduct) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        image={product.image}
                        label={product?.label}
                    />
                ))}
            </div>
            <div className="mx-auto w-fit"  >
                <Button className=" text-base font-semibold  m-auto my-6 !py-6 !px-20 " variant={"outline"}>Show More</Button>
            </div>

        </section>
    )
}

export default Products