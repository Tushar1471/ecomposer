import React from 'react';
import { ACCORDIAN_ITEMS } from '../../../../utils/constants';
import AccordionBar from '../../../../components/accordion-bar';

const FaQs: React.FC = () => {
    return (
        <section className='bg-[#E0E0FF] lg:py-20 py-10 lg:mt-0 mt-10'>
            <div>
                <h1 className="text-center lg:text-5xl text-2xl font-semibold lg:pb-24 pb-12">Popular Searched Questions</h1>
                <AccordionBar items={ACCORDIAN_ITEMS} />
            </div>
        </section>
    );
};

export default FaQs;
