import React from 'react';
import { CLOUDINARY_URL } from '../../../../utils/constants';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const SubscribeWrapper: React.FC= () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    return (
        <>
            <section className='lg:pt-20 lg:block hidden'>
                <div className='lg:w-8/12 mx-auto flex justify-between items-end'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                        className='lg:w-5/12 flex lg:flex-col gap-y-10'>
                        <h2 className='font lg:text-6xl'>Subscribe Now and Enjoy the Perks</h2>
                        <p className='lg:text-lg text-slate-400'>Join our community of headwear enthusiasts and be the first to know about new arrivals, special offers, and more!</p>
                        <div className='lg:w-full flex justify-between'>
                            <input className='lg:w-8/12 lg:py-2 rounded-full indent-4 lg:text-lg border' placeholder='Email' type="email" name="email" id="email" />
                            <button className='lg:w-3/12  bg-black text-white rounded-full'>Subscribe</button>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        className='lg:w-6/12'>
                        <img className='w-full h-full rounded-lg' src={CLOUDINARY_URL + "1mTuTgocOabn-newsletter.png?v=1723630121"} alt="Backdrop" />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default SubscribeWrapper;