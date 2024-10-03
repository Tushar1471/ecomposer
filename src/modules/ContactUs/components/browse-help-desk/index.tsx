import React from 'react';
import DeskStats from '../../../../components/desk-stats';
import { HELPDESK_STATS } from '../../../../utils/constants';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const BrowseHelpDesk: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    return (
        <>
            <section className='lg:w-10/12 mx-auto flex flex-col gap-y-10 lg:py-20'>
                <h2 className='text-center lg:text-5xl font-semibold lg:mb-4'>Browse our Help Desk</h2>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="w-full flex flex-wrap mx-auto gap-10 justify-center">
                    {HELPDESK_STATS && HELPDESK_STATS.length > 0 && HELPDESK_STATS.map((stats, index) => <DeskStats key={index} iconSrc={stats?.iconSrc} deskLabel={stats?.deskLabel} deskDescription={stats?.deskDescription} />)}
                </motion.div>
            </section >
        </>
    );
};

export default BrowseHelpDesk;