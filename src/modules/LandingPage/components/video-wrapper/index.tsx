import React from 'react';
import { CLOUDINARY_URL, PERSONAL_STATS } from '../../../../utils/constants';
import { FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import PersonalStats from '../../../../components/personal-stats';

const VideoWrapper: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <>
            <section className='lg:py-20 py-10'>
                <div className='lg:w-8/12 px-3 mx-auto relative'>
                    <img className='w-full h-full rounded-3xl' src={CLOUDINARY_URL + "KDZR1Qmnslbg-bn-video.png?v=1723608937"} alt="Video Wrapper" />
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                        className='absolute bottom-8 lg:right-20 right-10 lg:text-white text-black'>
                        <p className='border lg:px-5 px-2 lg:py-2 glass rounded-full text-xl flex items-center gap-x-3 cursor-pointer'>See Videos <span><FaGooglePlay /></span></p>
                    </motion.div>
                </div>
                <div className='lg:w-8/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center mt-10 p-4'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        className='lg:w-4/12 w-11/12 font flex text-center justify-center items-center'>
                        <h2 className='lg:text-5xl text-2xl'>Your Personal<br />
                            Coffee Shop at Home
                        </h2>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        className='lg:w-7/12 w-11/12 mx-auto flex flex-wrap lg:gap-x-1 lg:gap-y-2 justify-between py-4 lg:py-0'>
                        {PERSONAL_STATS && PERSONAL_STATS.length > 0 && PERSONAL_STATS.map((stat) => <PersonalStats key={stat?.id} label={stat?.label} labelSrc={stat?.labelSrc} />)}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default VideoWrapper;