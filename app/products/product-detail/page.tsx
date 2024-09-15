import ProductDetailView from '@/app/(components)/products/product-detail-view'
import ProductDetailTabsView from '@/app/(components)/products/product-detail-view-tabs'
import React from 'react'

const ProductDetailPage = () => {
  return (
    <div className='flex flex-grow flex-col bg-white'>
      {/* <ProductDetailView/> */}
      <ProductDetailTabsView/>
    </div>
  )
}

export default ProductDetailPage
