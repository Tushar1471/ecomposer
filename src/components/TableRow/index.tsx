import React from 'react';
import { CLOUDINARY_URL } from '../../utils/constants';

interface TableStats {
    feature: string;
    ourMaker: boolean;
    otherMaker1: boolean | null;
    otherMaker2: boolean | null;
}

const TableRow: React.FC<TableStats> = ({ feature, ourMaker, otherMaker1, otherMaker2 }) => {
    const renderIcon = (value: boolean | null) => {
        return value ? (
            <img src={CLOUDINARY_URL + "iWqNQXl1Dechecked-1.png?v=1723627562"} alt="Tick" className="lg:w-[2rem] mx-auto" />
        ) : value === false ? (
            <img src={CLOUDINARY_URL + "XpSk0gcki5checked-2.png?v=1723627580"} alt="Cross" className='lg:w-[1.5rem] mx-auto' />
        ) : null;
    };

    return (
        <tr className='lg:text-lg font-semibold'>
            <td className="p-4 border text-left">{feature}</td>
            <td className="p-4 border">{renderIcon(ourMaker)}</td>
            <td className="p-4 border">{renderIcon(otherMaker1)}</td>
            <td className="p-4 border">{renderIcon(otherMaker2)}</td>
        </tr>
    );
};

export default TableRow;
