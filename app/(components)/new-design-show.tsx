import { Button } from '@/components/ui/button'
import React from 'react'
import ProductCard from './product-card'

const NewDesignShow = () => {
    return (
        <div className='bg-white py-4 px-16'>
            <div className='text-black text-center text-6xl font-extrabold mb-4'>
                NEW DESIGNS
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                {/* Add more ProductCard components here if needed */}
            </div>
            <div className="flex justify-center mt-4">
                <Button className="text-black border-2 border-gray-500 px-6 py-3 text-lg rounded-3xl hover:bg-gray-100 hover:border-black w-52 h-14" variant="outline">
                    View all
                </Button>
            </div>
        </div>
    )
}

export default NewDesignShow
