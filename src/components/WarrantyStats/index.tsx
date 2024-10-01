import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

interface Props {
    title: string;
    iconSrc: string;
}

const WarrantyStats: React.FC<Props> = ({ title, iconSrc }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='lg:w-4/12 flex items-center gap-x-3'>
                <img className='lg:w-1' src={CLOUDINARY_URL + iconSrc} alt="" />
                <p
                    className='lg:text-xl font-semibold'>{title}</p>
            </motion.div>
        </>
    );
};

export default WarrantyStats;