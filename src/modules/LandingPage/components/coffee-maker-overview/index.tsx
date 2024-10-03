import React from 'react';
import OverviewCard from '../../../../components/OverviewCard';
import { COFFEE_FEATURES, WARRANTY_STATS } from '../../../../utils/constants';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import WarrantyStats from '../../../../components/WarrantyStats';


const CoffeeMakerOverview: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <section className='lg:pt-32 pt-16'>
                <motion.h1 ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='font text-center lg:text-6xl text-3xl pb-10'>What Makes Our Coffee Makers<br />
                    the Best Choice?
                </motion.h1>
                <div className='w-full'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 150 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='lg:w-8/12 p-3 lg:p-0 mx-auto flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-10'>
                    {COFFEE_FEATURES && COFFEE_FEATURES.length > 0 && COFFEE_FEATURES.map((feature) => (
                        <OverviewCard key={feature?.id} id={feature?.id} title={feature?.title} description={feature?.description} imageUrl={feature?.imageUrl} />
                    ))}
                </motion.div>
                </div>
                <div className='lg:w-7/12 w-11/12 bg-[#FFF1A8] mx-auto lg:mt-24 lg:rounded-full rounded-2xl flex lg:flex-row flex-col gap-x-4 py-4 lg:px-10 gap-y-3'>
                    {WARRANTY_STATS.map((stat, index) => (<WarrantyStats key={index} title={stat?.title} iconSrc={stat?.iconSrc} />))}
                </div>
            </section>
        </>
    );
};

export default CoffeeMakerOverview;