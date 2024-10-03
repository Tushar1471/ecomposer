import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';

interface Props {
label:string;
labelSrc:string;
}

const PersonalStats: React.FC<Props> = ({label,labelSrc}) => {
    return (
        <>
            <div className='lg:w-5/12  flex justify-center lg:justify-start items-center gap-x-3'>
                <img className='lg:w-2'src={CLOUDINARY_URL + labelSrc} alt="" />
                <p className='text-xl lg:font-semibold font-bold'>{label}</p>
            </div>
        </>
    );
};

export default PersonalStats;