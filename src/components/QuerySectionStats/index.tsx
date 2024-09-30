import React from 'react';

interface DataProps {
    title: string,
    data: string,
}

const QuerySectionStats: React.FC<DataProps> = ({ title, data }) => {
    return (
        <>
            <p className='text-slate-500'>{title}:<span className='text-black'>{data}</span></p>
        </>
    );
};

export default QuerySectionStats;