import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../../../utils/constants';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CLOUDINARY_URL } from '../../../../utils/constants';

const ReviewWrapper: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex: number) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex: number) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const { text, name, imageSrc, rating } = testimonials[currentIndex];
    return (
        <>
            <section className='lg:block hidden'>
                <div className='lg:w-8/12 lg:h-[70vh] rounded-3xl mx-auto bg-green-400 backdrop relative overflow-hidden'>
                    <div className='lg:w-5/12 h-[70%] shadow-lg bg-white absolute right-20 top-[15%] rounded-3xl lg:p-16 text-center overflow-hidden'>
                        <motion.h3
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1 }}
                            className='font lg:text-2xl'>Hear from Our Happy Customers</motion.h3>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
                            style={{ scrollBehavior: "smooth" }}

                            className="lg:w-full mx-auto lg:p-2 text-center rounded-lg lg:mt-4">
                            <p className="text-lg font-semibold mb-4">"{text}"</p>
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={CLOUDINARY_URL + imageSrc}
                                    alt={name}
                                    className="w-16 h-16 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h4 className="font-bold">{name}</h4>
                                    <div className="flex text-yellow-500">
                                        {Array(rating)
                                            .fill(null)
                                            .map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center space-x-4">
                                <button
                                    onClick={handlePrev}
                                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                >
                                    <GrFormPrevious />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                >
                                    <MdNavigateNext />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReviewWrapper;