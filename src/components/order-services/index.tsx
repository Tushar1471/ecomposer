import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
    iconSrc: string;
    serviceLabel: string;
    serviceDescription: string;
    buttonLabel: string;
}

const OrderServices: React.FC<Props> = ({ iconSrc, serviceLabel, serviceDescription, buttonLabel }) => {
    return (
        <>
            <div className='lg:w-6/12 shadow-lg bg-white rounded-xl lg:p-4 flex flex-col gap-y-4'>
                <figure className='flex flex-col gap-y-4'>
                    <img className='lg:w-[3rem] mx-auto' src={CLOUDINARY_URL + iconSrc} alt="Order Tracking" />
                    <figcaption className='text-black lg:text-2xl'>{serviceLabel}</figcaption>
                </figure>
                <p className='text-slate-400'>{serviceDescription}</p>
                <button className='flex bg-black mx-auto items-center lg:text-xl lg:px-4 lg:py-2 gap-x-3 rounded-full'>{buttonLabel}<FaArrowRightLong /></button>
            </div>
        </>
    );
};

export default OrderServices;