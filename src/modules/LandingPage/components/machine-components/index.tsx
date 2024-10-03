import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { CLOUDINARY_URL, COMPONENTS_STATS } from '../../../../utils/constants';
import MachineStats01 from '../../../../components/machine-stats01';
import MachineStats02 from '../../../../components/machine-stats02';

const MachineComponents: React.FC = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const sidebarList1 = COMPONENTS_STATS && COMPONENTS_STATS.slice(0, 3);
  const sidebarList2 = COMPONENTS_STATS && COMPONENTS_STATS.slice(3,6);

  return (
    <>
      <section className='lg:pt-24 lg:block hidden'>
        <motion.h1 ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='font text-center lg:text-6xl'>Perfect Extraction for a Perfect Cup
        </motion.h1>
        <div className='lg:w-8/12 mx-auto lg:mt-20 flex lg:flex-row lg:gap-x-2'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='lg:w-4/12 lg:py-4'>
            {sidebarList1 && sidebarList1.map((el) => <MachineStats01 key={el?.id} id={el?.id} title={el?.title} description={el?.description} imgSrc={el?.imgSrc} />)}
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className='lg:w-4/12 flex justify-end'>
            <motion.img
              initial={{ scale: 0.2 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 1 }}
              src={CLOUDINARY_URL + "9CKZqpruBGmaker-cff.png?v=1723683337"} alt="Coffee Maker" />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='lg:w-4/12 lg:py-4'>
            {sidebarList2 && sidebarList2.map((el) => <MachineStats02 key={el?.id} id={el?.id} title={el?.title} description={el?.description} imgSrc={el?.imgSrc} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MachineComponents;