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
            <section className='pt-20'>
                <div className='lg:w-8/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-end gap-y-6'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                        className='lg:w-5/12 flex flex-col  gap-y-10'>
                        <h2 className='font lg:text-6xl text-3xl'>Subscribe Now and Enjoy the Perks</h2>
                        <p className='lg:text-lg text-slate-400'>Join our community of headwear enthusiasts and be the first to know about new arrivals, special offers, and more!</p>
                        <div className='lg:w-full flex lg:flex-row flex-col justify-between items-center gap-y-2'>
                            <input className='lg:w-8/12 w-11/12 py-2 rounded-full indent-4 lg:text-lg border' placeholder='Email' type="email" name="email" id="email" />
                            <button className='w-3/12 bg-black text-white rounded-full p-2'>Subscribe</button>
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