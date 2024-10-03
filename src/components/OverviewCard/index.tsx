import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';


interface OverviewCardProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ id, title, description, imageUrl }) => {

    return (
        <>
            <div
                className='lg:w-4/12 w-full p-1 text-center'>
                <img className='rounded-2xl' src={CLOUDINARY_URL + imageUrl} alt="" />
                <div className='px-3'>
                    <h2 className='font-semibold text-2xl lg:py-3 py-2'>{title}</h2>
                    <p className='lg:text-lg text-[#6B6B6B]'>{description}</p>
                </div>
            </div>
        </>
    );
};

export default OverviewCard;