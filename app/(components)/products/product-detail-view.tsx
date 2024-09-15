import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button'; // From shadcn UI
import { Input } from '@/components/ui/input'; // From shadcn UI

const ProductDetailView = () => {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Horizontal separator */}
            <div className="flex px-24 mt-4 justify-center">
                <span className="w-full h-[1px] bg-slate-300" />
            </div>

            {/* Main content */}
            <div className="flex justify-center w-full px-24 py-8 text-black space-x-12">
                {/* Left side containing images */}
                <div className="flex w-1/2 space-x-4">
                    {/* Column of three small images */}
                    <div className="flex flex-col w-1/5 gap-3 justify-between my-4">
                        <div className='w-full bg-slate-100 rounded-2xl'>
                            <Image
                                src="/images/image1.png"
                                alt="Small Image 1"
                                width={200}
                                height={200}
                                className="object-cover rounded-2xl h-32 p-2"
                            />
                        </div>
                        <div className='w-full bg-slate-100 rounded-2xl'>
                            <Image
                                src="/images/image3.png"
                                alt="Small Image 1"
                                width={200}
                                height={200}
                                className="object-cover rounded-2xl h-32 p-2"
                            />
                        </div>

                        <div className='w-full bg-slate-100 rounded-2xl'>
                            <Image
                                src="/images/image2.png"
                                alt="Small Image 1"
                                width={200}
                                height={200}
                                className="object-cover rounded-2xl h-32 p-2"
                            />
                        </div>
                    </div>

                    {/* Large image */}
                    <div className="w-4/5 flex ">
                    <div className='w-full flex my-auto h-[480px] bg-slate-100 rounded-2xl justify-center items-center mx-auto'>
                        <Image
                            src="/images/image5.png"
                            alt="Large Image"
                            width={380}
                            height={600}
                            className="object-cover rounded-lg p-2 "
                        />
                        </div>
                    </div>
                </div>

                {/* Right side containing product details */}
                <div className="w-1/2 flex flex-col gap-2">
                    {/* Title */}
                    <h1 className="text-4xl font-bold">Stylish Jacket</h1>

                    {/* Rating */}
                    <div className="flex items-center text-lg space-x-2">
                        <span>⭐⭐⭐⭐☆</span>
                        <span>(4/5 based on 23 reviews)</span>
                    </div>

                    {/* Price and discount */}
                    <div className="text-2xl font-semibold flex items-end">
                        <div className='text-4xl'> $49.99{' '} </div>
                        <span className="text-lg text-red-500 ml-2">SAVE 10% </span>
                    </div>

                    {/* Description */}
                    <p className="text-md text-gray-700">
                        Perfect for all seasons. This jacket provides both style and comfort.
                        Perfect for all seasons. This jacket provides both style and comfort.
                        Perfect for all seasons. This jacket provides both style and comfort.

                    </p>

                    <div className="space-y-4 ">
                        <span className="block w-full h-[1.5px] bg-slate-200 my-2" />

                        {/* Color selection */}
                        <div className="flex items-center gap-4">
                            <label className="font-semibold">Color: </label>
                            <div className="flex gap-2">
                                <Button className="w-8 h-8 rounded-full bg-red-500 hover:ring-2 ring-red-500" />
                                <Button className="w-8 h-8 rounded-full bg-blue-500 hover:ring-2 ring-blue-500" />
                                <Button className="w-8 h-8 rounded-full bg-black hover:ring-2 ring-gray-500" />
                            </div>
                        </div>

                        <span className="block w-full h-[1.5px] bg-slate-200 my-2" />

                        {/* Size selection */}
                        <div className="flex items-center gap-4 ">
                            <label className="font-semibold">Size: </label>
                            <div className="flex gap-2">
                                <Button variant="outline" className="px-4 py-2">
                                    Small
                                </Button>
                                <Button variant="outline" className="px-4 py-1">
                                    Medium
                                </Button>
                                <Button variant="outline" className="px-4 py-2">
                                    Large
                                </Button>
                            </div>
                        </div>

                        <span className="block w-full h-[1.5px] bg-slate-200 my-2" />

                        {/* Quantity and add to cart */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center text-center  w-1/3 bg-slate-100  text-black justify-between p-1 rounded-3xl">
                                <Button className="px-3 py-1 bg-transparent h-10 text-3xl text-black rounded-2xl w-fit">-</Button>
                                <Input type="text" value="1" className="w-12 text-center bg-transparent" readOnly />
                                <Button className="px-3 py-1 bg-transparent  text-3xl text-black rounded-2xl w-fit">+</Button>
                            </div>
                            <div className='w-2/3'>
                            <Button className="bg-red-500 text-white px-6 py-0 rounded-3xl hover:bg-red-600 w-full ">
                                Add to Cart
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailView;
