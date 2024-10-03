import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';

interface Props {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
}

const MachineStats02: React.FC<Props> = ({ title, description, imgSrc }) => {
    return (
        <>
            <div className='flex lg:flex-row flex-col justify-between items-center'>
                <img className='lg:w-2 w-3 border border-black rounded-full' src={CLOUDINARY_URL + imgSrc} alt={title} />
                <div className='p-4 flex flex-col lg:items-start items-center'>
                    <h3 className='lg:font-semibold font-bold lg:text-lg'>{title}</h3>
                    <p className='text-lg text-[#6B6B6B] text-justify lg:text-start'>{description}</p>
                </div>
            </div>
        </>
    );
};

export default MachineStats02;