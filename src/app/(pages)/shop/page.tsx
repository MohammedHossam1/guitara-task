import ProductList from '@/components/layout/shop'
import BreadCrump from '@/components/shared/Breadcrump'
import React from 'react'

const Shop = () => {
    return (
        <div>
            <BreadCrump />
            <div className="">
                <ProductList />
            </div>
        </div>
    )
}

export default Shop