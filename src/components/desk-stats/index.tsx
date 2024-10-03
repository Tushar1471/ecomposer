import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';

interface Props {
    iconSrc: string;
    deskLabel: string;
    deskDescription: string;
}

const DeskStats: React.FC<Props> = ({ iconSrc, deskLabel, deskDescription }) => {
    return (
        <>
            <div className="lg:min-w-[28rem] min-w-[22rem] bg-[#F4F4FF] rounded-xl lg:py-4 py-2 px-4 lg:px-10">
                <div className="flex items-center mb-4">
                    <img src={CLOUDINARY_URL + iconSrc} alt="Size Guide Icon" className="w-[4rem] text-red-500" />
                </div>
                <h3 className="text-lg lg:font-semibold font-bold mb-2 lg:text-3xl">{deskLabel}</h3>
                <p className="text-gray-600 mb-4 lg:text-lg">{deskDescription}</p>
                <a href="/" className="font-semibold transition hover:text-[#f9403a]">View More</a>
            </div>
        </>
    );
};

export default DeskStats;