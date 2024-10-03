import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SelectInput from '../../components/SelectInput';
import { IMG_URL, OPTIONS } from '../../utils/constants';

const Header: React.FC = () => {

    const location = useLocation();
    let pageTitle: string;

    switch (location.pathname) {
        case "/":
            pageTitle = "Coffee Marker";
            break;
        case "/contact":
            pageTitle = "Help Center";
            break;
        default:
            pageTitle = "Unknown";

    }

    return (
        <>
            <header className='p-4 flex lg:flex-row flex-col items-center shadow border-b lg:gap-y-0 gap-y-3 sticky top-0 left-0 right-0 z-40 bg-[#ffffff]'>
                <Link to={"/"}>
                    <img className='lg:w-48 w-40 mx-auto' src={IMG_URL + "logo-text.png"} alt="" />
                </Link>

                <div className='mx-auto w-full flex lg:flex-row flex-col justify-center items-center lg:gap-x-3 gap-y-5'>
                    <div className='flex items-center gap-x-2'>
                        <label className='font-bold'>{pageTitle}</label>
                        <SelectInput options={OPTIONS} />
                    </div>
                    <input className='lg:w-3/12 py-1 w-11/12 rounded-md indent-4 outline-none border border-slate-300' type="text" name="search" id="search" placeholder='🔍 Type Something to find template' />
                </div>
            </header>
        </>
    );
};

export default Header;