import React, { useState } from 'react';
import CarouselSlider from '../../../../components/carousel-slider';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { slides, machine_description } from '../../../../utils/constants';
import { FaShopify } from "react-icons/fa";


const CarouselContainer: React.FC = () => {

    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    const handleAddClick = (): void => {
        setCount((prevCount) => prevCount + 1);
    }

    const handleSubClick = (): void => {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <>
            <section className='lg:block hidden'>
                <div className='lg:w-8/12 mx-auto flex lg:flex-row flex-col gap-x-4'>
                    <div className='lg:w-6/12 lg:p-4'>
                        <CarouselSlider slides={slides} />
                    </div>
                    <div ref={ref} className='lg:w-6/12 lg:p-4 flex flex-col gap-y-10'>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: 100 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                            className='flex gap-x-2'>
                            <div className='bg-[#FFF1A8] border-[rgba(156, 156, 156, 0.24)] inline-block rounded-full'>
                                <div className='flex items-center justify-center lg:p-1 gap-x-3'>
                                    <img className='lg:w-1' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-5goQWsCAcnstar-img.png?v=1723536279" alt="Star Png" />
                                    <p className='text-lg font-bold'>4.7 star over 275 ratings</p>
                                </div>
                            </div>
                            <p className='lg:px-10 font-semibold lg:py-2 bg-green-200 rounded-full'>Best Choice</p>
                        </motion.div>
                        <div className='flex flex-col gap-y-8 lg:p-2'>
                            <motion.h2
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                                className='font lg:text-2xl'>Coffeemaker, Coffee Center Barista Bar 4-In-1 Coffee Machine</motion.h2>
                            <motion.p
                                ref={ref}
                                initial={{ opacity: 0, y: 120 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                                className='lg:text-4xl lg:font-semibold flex items-center gap-x-4'>$269.00 <span className='text-slate-300 line-through lg:text-xl'>$299.00</span><span className='bg-red-600 lg:px-2 lg:py-1 rounded-full text-white lg:text-lg'>-10%</span></motion.p>
                            <motion.ul
                                ref={ref}
                                initial={{ opacity: 0, y: 150 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                                className='flex flex-col gap-y-4'>
                                {
                                    machine_description.map((el, index) => (
                                        <li key={index} className='flex items-center lg:text-xl gap-x-3'>
                                            <svg className='font-bold' width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z"></path></svg>
                                            {el}
                                        </li>
                                    ))
                                }
                            </motion.ul>
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, x: 100 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 1 }}
                                className='w-full flex items-center justify-between gap-x-3'>
                                <div className='lg:w-4/12'>
                                    <p className='border flex items-center justify-evenly rounded-full cursor-pointer'>
                                        <button className='lg:p-2 lg:text-4xl' onClick={() => handleSubClick()} disabled={count <= 0}>-</button>
                                        <span className='font-semibold lg:text-4xl'>{count}</span>
                                        <button className="lg:p-2 lg:text-4xl" onClick={() => handleAddClick()}>+</button>
                                    </p>
                                </div>
                                <div className='lg:w-8/12 bg-black text-white text-center lg:text-xl font-semibold lg:p-3 rounded-full'>Add to Cart</div>
                            </motion.div>
                            <div>
                                <motion.p
                                    ref={ref}
                                    initial={{ opacity: 0, y: 180 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1 }}
                                    className='lg:text-lg font-semibold lg:pb-2'>Buy it with:</motion.p>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1 }}
                                    className='lg:w-full flex items-center border rounded-full lg:p-2 bg-[#F6F6F6]'>
                                    <div className='flex items-center gap-x-2'>
                                        <img className='lg:w-2 rounded-full' src={"https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-cff5_200x.png?v=1723622781"} alt="Watch" />
                                        <div className='flex lg:flex-col'>
                                            <p className='lg:text-lg font-semibold'>Reusable Filter Cup</p>
                                            <p className='flex gap-x-3 lg:text-lg'>$12.60<span className='text-slate-400 line-through'>$13.90</span></p>
                                        </div>
                                    </div>
                                    <button className='flex items-center gap-x-2 lg:text-lg border rounded-full lg:px-2 cursor-pointer'>Buy Now<FaShopify /></button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarouselContainer;