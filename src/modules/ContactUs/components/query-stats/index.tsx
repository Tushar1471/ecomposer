import React from 'react';
import QueryBlocks from '../../../../components/query-blocks';
import { QUERY_STATS } from '../../../../utils/constants';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



const QueryStats: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    return (
        <>
            <section className='lg:py-32 text-center flex flex-col gap-y-20'>
                <div>
                    <h2 className='font-semibold lg:text-5xl lg:pb-2'>Any other questions?</h2>
                    <p className='lg:text-lg'>We're here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.</p>
                </div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className='lg:w-8/12 border rounded-3xl mx-auto lg:p-5 flex'>
                    {QUERY_STATS && QUERY_STATS.length > 0 && QUERY_STATS.map((qstat, index) => (
                        <QueryBlocks key={index} iconSrc={qstat?.iconSrc} queryLabel={qstat?.queryLabel} queryContent={qstat?.queryContent} />))}
                </motion.div>
            </section>
        </>
    );
};

export default QueryStats;