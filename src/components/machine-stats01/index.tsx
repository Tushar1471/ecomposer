import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';

interface ComponentProps {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
}

const MachineStats01: React.FC<ComponentProps> = ({ title, description, imgSrc }) => {
    return (
        <>
            <div className='flex lg:flex-row flex-col-reverse justify-center items-center'>
                <div className='p-4'>
                    <h3 className='lg:font-semibold lg:text-end font-bold text-center  lg:text-lg'>{title}</h3>
                    <p className='text-lg text-[#6B6B6B] lg:text-end'>{description}</p>
                </div>
                <img className='lg:w-2 w-3 border border-black rounded-full' src={CLOUDINARY_URL + imgSrc} alt={title} />
            </div>
        </>
    );
};

export default MachineStats01;