
   "use client";

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ProductCard from '../product-card';
import { useRouter } from 'next/navigation'; 

interface Product {
  images: string[];
  name: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  discount: string;
  stockStatus: string;
}

const LatestProductDesignPage: React.FC = () => {
  const router = useRouter();
  
  const products = [
   
    {
      images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
      name: 'Stylish Jacket',
      price: '$49.99',
      rating: 4,
      reviews: 23,
      description: 'Perfect for all seasons',
      discount: '10% OFF',
      stockStatus: 'In Stock',
    },
    {
      images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
      name: 'Elegant Dress',
      price: '$79.99',
      rating: 5,
      reviews: 15,
      description: 'Beautiful evening wear',
      discount: '20% OFF',
      stockStatus: 'Limited Stock',
    },
    {
        images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
        name: 'Stylish Jacket',
        price: '$49.99',
        rating: 4,
        reviews: 23,
        description: 'Perfect for all seasons',
        discount: '10% OFF',
        stockStatus: 'In Stock',
      },
      {
        images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
        name: 'Elegant Dress',
        price: '$79.99',
        rating: 5,
        reviews: 15,
        description: 'Beautiful evening wear',
        discount: '20% OFF',
        stockStatus: 'Limited Stock',
      },
      {
        images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
        name: 'Stylish Jacket',
        price: '$49.99',
        rating: 4,
        reviews: 23,
        description: 'Perfect for all seasons',
        discount: '10% OFF',
        stockStatus: 'In Stock',
      },
      {
        images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
        name: 'Elegant Dress',
        price: '$79.99',
        rating: 5,
        reviews: 15,
        description: 'Beautiful evening wear',
        discount: '20% OFF',
        stockStatus: 'Limited Stock',
      },
      {
        images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
        name: 'Stylish Jacket',
        price: '$49.99',
        rating: 4,
        reviews: 23,
        description: 'Perfect for all seasons',
        discount: '10% OFF',
        stockStatus: 'In Stock',
      },
      {
        images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
        name: 'Elegant Dress',
        price: '$79.99',
        rating: 5,
        reviews: 15,
        description: 'Beautiful evening wear',
        discount: '20% OFF',
        stockStatus: 'Limited Stock',
      },
      {
        images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
        name: 'Stylish Jacket',
        price: '$49.99',
        rating: 4,
        reviews: 23,
        description: 'Perfect for all seasons',
        discount: '10% OFF',
        stockStatus: 'In Stock',
      },
      {
        images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
        name: 'Elegant Dress',
        price: '$79.99',
        rating: 5,
        reviews: 15,
        description: 'Beautiful evening wear',
        discount: '20% OFF',
        stockStatus: 'Limited Stock',
      },
      {
        images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
        name: 'Stylish Jacket',
        price: '$49.99',
        rating: 4,
        reviews: 23,
        description: 'Perfect for all seasons',
        discount: '10% OFF',
        stockStatus: 'In Stock',
      },
      {
        images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
        name: 'Elegant Dress',
        price: '$79.99',
        rating: 5,
        reviews: 15,
        description: 'Beautiful evening wear',
        discount: '20% OFF',
        stockStatus: 'Limited Stock',
      },
      {
        images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
        name: 'Stylish Jacket',
        price: '$49.99',
        rating: 4,
        reviews: 23,
        description: 'Perfect for all seasons',
        discount: '10% OFF',
        stockStatus: 'In Stock',
      },
      {
        images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
        name: 'Elegant Dress',
        price: '$79.99',
        rating: 5,
        reviews: 15,
        description: 'Beautiful evening wear',
        discount: '20% OFF',
        stockStatus: 'Limited Stock',
      },
      {
        images: ['/images/image2.png', '/images/image5.png', '/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'],
        name: 'Stylish Jacket',
        price: '$49.99',
        rating: 4,
        reviews: 23,
        description: 'Perfect for all seasons',
        discount: '10% OFF',
        stockStatus: 'In Stock',
      },
      {
        images: ['/images/image4.png', '/images/image5.png', '/images/image1.png', '/images/image2.png', '/images/image3.png', '/images/image6.png'],
        name: 'Elegant Dress',
        price: '$79.99',
        rating: 5,
        reviews: 15,
        description: 'Beautiful evening wear',
        discount: '20% OFF',
        stockStatus: 'Limited Stock',
      },
  ];

  // Pagination and filtering state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8); // Show 8 products per page
  const [filterRating, setFilterRating] = useState<number>(0); // Filter by rating (0 means no filter)

  // Filter products based on rating
  const filteredProducts = products.filter(product => product.rating >= filterRating);

  // Calculate the products to show based on the current page and products per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handler functions
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (rating: number) => {
    setFilterRating(rating);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  return (
    <div className='bg-white py-4 px-16'>
      <div className='text-black text-center text-6xl font-extrabold mb-4'>THESE ARE LATEST DESIGNS</div>

      {/* Filter section */}
      <div className='text-center mb-4'>
        <span className='mr-4'>Filter by Rating:</span>
        <Button
          className='mr-2'
          onClick={() => handleFilterChange(0)}
          variant={filterRating === 0 ? 'outline' : 'default'}
        >
          All
        </Button>
        <Button
          className='mr-2'
          onClick={() => handleFilterChange(4)}
          variant={filterRating === 4 ? 'outline' : 'default'}
        >
          4 & up
        </Button>
        <Button
          className='mr-2'
          onClick={() => handleFilterChange(5)}
          variant={filterRating === 5 ? 'outline' : 'default'}
        >
          5
        </Button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            images={product.images}
            name={product.name}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
            description={product.description}
            discount={product.discount}
            stockStatus={product.stockStatus}
            className='mt-3'
          />
        ))}
      </div>

      {/* Pagination controls */}
      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            className={`mx-1 ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LatestProductDesignPage;
