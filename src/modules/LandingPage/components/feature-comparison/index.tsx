import React from 'react';
import { tableData } from '../../../../utils/constants';
import TableRow from '../../../../components/TableRow';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const FeatureComparison: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    return (
        <>
            <section className='lg:py-32 py-16 hidden lg:block'>
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className='font text-center lg:text-6xl text-3xl'>How we stand Out
                </motion.h1>
                <div className='lg:w-8/12 mx-auto mt-10'>
                    <table className="w-full border-collapse overflow-x-scroll">
                        <thead>
                            <tr>
                                <th className="p-4"> </th>
                                <th className="p-4 border-2">Our Coffee Maker</th>
                                <th>Other Coffee Maker 1</th>
                                <th>Other Coffee Maker 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <TableRow
                                    key={index}
                                    feature={row.feature}
                                    ourMaker={row.ourMaker}
                                    otherMaker1={row.otherMaker1}
                                    otherMaker2={row.otherMaker2}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default FeatureComparison;