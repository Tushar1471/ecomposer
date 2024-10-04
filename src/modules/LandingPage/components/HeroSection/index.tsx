import React from 'react';
import "../../../../styles/style.css";
import EcomBlock from '../../../../components/EcomBlock';
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <>
            <section className=' text-white'>
                <div className='heroImage min-h-screen'>
                    <div className='lg:w-9/12 h-full absolute top-[0%] lg:left-[15%] flex lg:flex-row flex-col-reverse p-4'>
                        <motion.div initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeIn' }} className='lg:w-6/12 h-full flex flex-col justify-center items-start gap-y-8'>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className='bg-[#006356] border-[rgba(156, 156, 156, 0.24)] inline-block rounded-full'>
                                <div className='flex items-center gap-x-3 lg:p-2 p-1'>
                                    <img className='w-[2rem]' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-5goQWsCAcnstar-img.png?v=1723536279" alt="Star Png" />
                                    <p className='lg:text-lg font-bold'>4.7 star over 275 ratings</p>
                                </div>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 2, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className='lg:text-7xl text-2xl font'>Brew the Perfect Cup Every Time</motion.h2>
                            <p>Engineered for excellence, designed for coffee lovers.</p>
                            <div>
                                <motion.ul
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 3, y: 0 }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                >
                                    <EcomBlock data={"4-In-1 Coffee Machine"} />
                                    <EcomBlock data={"Espresso & Nespresso Capsule Compatible"} />
                                    <EcomBlock data={"Single-Serve Coffee"} />
                                </motion.ul>
                            </div>
                            <button className='flex items-center gap-x-2 mb-4 bg-black rounded-full lg:px-4 lg:py-3 px-3 py-2'>Discover More<FaPlayCircle /></button>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }} className='lg:w-5/12 w-11/12 flex mx-auto justify-center items-center'>
                            <div
                                className='relative'>
                                <img className='w-56 lg:w-full' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-RUYPYkqNjZcoffee-m-layer.png?v=1723540466" alt="" />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className='absolute top-0 right-0'>
                                    <img className='lg:w-44 w-20' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-mRuu436zTFlogo-br.png?v=1723540535" alt="" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className='absolute lg:bottom-0 bottom-6 right-0'>
                                    <p className='bg-white font text-green-600 lg:text-7xl font-semibold px-4 pb-2 rounded-full'>4-in-1</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;