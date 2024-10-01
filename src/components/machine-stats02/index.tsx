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
            <div className='flex justify-between items-center'>
                <img className='lg:w-2 border border-black rounded-full' src={CLOUDINARY_URL + imgSrc} alt={title} />
                <div className='lg:p-4'>
                    <h3 className='font-semibold lg:text-lg'>{title}</h3>
                    <p className='text-lg text-[#6B6B6B]'>{description}</p>
                </div>
            </div>
        </>
    );
};

export default MachineStats02;