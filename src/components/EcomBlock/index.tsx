import React from 'react';

interface Props {
    data: string,
}

const EcomBlock: React.FC<Props> = ({ data }) => {
    return (
        <>
            <li className='flex items-center gap-x-2 lg:mb-2'>
                <img className='w-[2rem]' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-lUYoRC7geficon-checkedf.png?v=1723539606" alt="Tick" />
                <span className='text-lg'>{data}</span>
            </li>
        </>
    );
};

export default EcomBlock;