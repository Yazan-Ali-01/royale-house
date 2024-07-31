import React from 'react'
import FlashSales from './FlashSales'
import ProductCarousel from './ProductCarousel'

const SecondSection = ({searchParams}) => {
  return (
    <div className='ml-40'>
    <FlashSales />
    <ProductCarousel searchParams={searchParams} />
    </div>
  )
}

export default SecondSection