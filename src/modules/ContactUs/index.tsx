import React from 'react';
import { CLOUDINARY_URL, ORDER_SERVICES } from '../../utils/constants';
import OrderServices from '../../components/order-services';
import BrowseHelpDesk from './components/browse-help-desk';
import FaQs from './components/faq\'s';
import QueryStats from './components/query-stats';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const ContactUs: React.FC = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,

  })
  return (
    <>
      <section>
        <div className='w-full lg:pb-44 relative'>
          <img className='w-full h-auto blur-[0.10rem]' src={CLOUDINARY_URL + "2RgmJOxbvBbg-hr-search.png?v=1724402439"} alt="Contact Backdrop" />
          <div className='w-full absolute top-[15%] left-0 text-center text-white flex flex-col gap-y-20'>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 11, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='font-semibold'>
              <h2 className='uppercase lg:text-6xl'>Help Center</h2>
              <p>Let us know how we may help you?</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='lg:w-5/12 mx-auto text-black bg-white flex justify-between lg:p-1 rounded-full gap-x-2 font-[600]'>
              <input className='w-full outline-none border-none lg:text-lg bg-none rounded-full indent-4 text-slate-400' type="text" name="query" id="query" placeholder='Search for answers' />
              <button className='bg-black text-white lg:px-6 lg:text-md lg:py-3 rounded-full '>Search</button>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 150 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='lg:w-6/12  mx-auto flex gap-x-7'>
              {ORDER_SERVICES && ORDER_SERVICES.length > 0 && ORDER_SERVICES.map((service) => (<OrderServices key={service?.id} iconSrc={service?.iconSrc} serviceLabel={service?.serviceLabel} serviceDescription={service?.serviceDescription} buttonLabel={service?.buttonLabel} />))}
            </motion.div>
          </div>
        </div>
        <BrowseHelpDesk />
        <FaQs />
        <QueryStats />
      </section>
    </>
  );
};

export default ContactUs;