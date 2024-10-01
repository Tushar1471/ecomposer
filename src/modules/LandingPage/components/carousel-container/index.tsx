import React, { useState } from 'react';
import CarouselSlider from '../../../../components/carousel-slider';


const CarouselContainer: React.FC = () => {

    const slides = [
        'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-cff1.jpg?v=1723622634&width=1946',
        'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-cff2_700x700.jpg?v=1723622634',
        'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-cff3_700x700.jpg?v=1723622634',
    ];

    const machine_description = [
        'Color: Black',
        'Product Dimensions: 11.88"D x 12.88"W x 16.75"H',
        'Special Feature Milk Frother',
        'Coffee Maker Type Drip Coffee Machine',
    ]

    const [count, setCount] = useState(0);

    function handleAddClick() {
        setCount((prevCount) => prevCount + 1);
    }

    function handleSubClick() {
        if (count > 0) setCount((prevCount) => prevCount - 1);
    }

    return (
        <>
            <section>
                <div className='lg:w-8/12 mx-auto flex lg:flex-row flex-col gap-x-4'>
                    <div className='lg:w-6/12 lg:p-4'>
                        <CarouselSlider slides={slides} />
                    </div>
                    <div className='lg:w-6/12 lg:p-4 flex flex-col gap-y-10'>
                        <div className='flex gap-x-2'>
                            <div className='bg-[#FFF1A8] border-[rgba(156, 156, 156, 0.24)] inline-block rounded-full'>
                                <div className='flex items-center justify-center lg:p-1 gap-x-3'>
                                    <img className='lg:w-1' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-5goQWsCAcnstar-img.png?v=1723536279" alt="Star Png" />
                                    <p className='text-lg font-bold'>4.7 star over 275 ratings</p>
                                </div>
                            </div>
                            <p className='lg:px-10 font-semibold lg:py-2 bg-green-200 rounded-full'>Best Choice</p>
                        </div>
                        <div className='flex flex-col gap-y-8 lg:p-2'>
                            <h2 className='font lg:text-2xl'>Coffeemaker, Coffee Center Barista Bar 4-In-1 Coffee Machine</h2>
                            <p className='lg:text-4xl lg:font-semibold flex items-center gap-x-4'>$269.00 <span className='text-slate-300 line-through lg:text-xl'>$299.00</span><span className='bg-red-600 lg:px-2 lg:py-1 rounded-full text-white lg:text-lg'>-10%</span></p>
                            <ul className='flex flex-col gap-y-4'>
                                {
                                    machine_description.map((el, index) => (
                                        <li key={index} className='flex items-center lg:text-xl gap-x-3'>
                                            <svg className='font-bold' width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z"></path></svg>
                                            {el}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='w-full flex items-center justify-between gap-x-3'>
                                <div className='lg:w-4/12'>
                                    <p className='border flex items-center justify-evenly rounded-full cursor-pointer'>
                                        <button className='lg:p-2 lg:text-4xl' onClick={() => handleSubClick()}>-</button>
                                        <span className='font-semibold lg:text-4xl'>{count}</span>
                                        <button className="lg:p-2 lg:text-4xl" onClick={() => handleAddClick()}>+</button>
                                    </p>
                                </div>
                                <div className='lg:w-8/12 bg-black text-white text-center lg:text-xl font-semibold lg:p-3 rounded-full'>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarouselContainer;