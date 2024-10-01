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
            <div className='flex justify-between items-center'>
                <div className='lg:p-4 text-end'>
                    <h3 className='font-semibold lg:text-lg'>{title}</h3>
                    <p className='text-lg text-[#6B6B6B]'>{description}</p>
                </div>
                <img className='lg:w-2 border border-black rounded-full' src={CLOUDINARY_URL + imgSrc} alt={title} />
            </div>
        </>
    );
};

export default MachineStats01;