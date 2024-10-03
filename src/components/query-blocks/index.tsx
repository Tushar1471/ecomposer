import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';

interface Props {
    iconSrc: string;
    queryLabel: string;
    queryContent: string;
}

const QueryBlocks: React.FC<Props> = ({ iconSrc, queryLabel, queryContent }) => {
    return (
        <>
            <div className='lg:w-3/12  w-full border-r-2 flex flex-col gap-y-2 justify-center items-center borderCross p-4'>
                <img className='w-3 mx-auto' src={CLOUDINARY_URL + iconSrc} alt="Call" />
                <h3 className='lg:text-4xl font-semibold'>{queryLabel}</h3>
                <p className='underline lg:text-2xl'>{queryContent}</p>
            </div>
        </>
    );
};

export default QueryBlocks;