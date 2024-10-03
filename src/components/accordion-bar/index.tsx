import React, { useState } from 'react';
import AccordionItem from '../accordion-item';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

interface AccordionProps {
    items: { label: string; content: string }[];
}

const AccordionBar: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:w-9/12 mx-auto shadow-lg rounded-3xl bg-white">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    label={item.label}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => toggleAccordion(index)}
                />
            ))}
        </motion.div>
    );
};

export default AccordionBar;