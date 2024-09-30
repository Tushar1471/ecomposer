import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectInput from '../../components/SelectInput';
import { CLOUDNINARY_URL, OPTIONS } from '../../utils/constants';

const Header: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();

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

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        e.target.value === "landing" ? navigate("/") : e.target.value === "contact" ? navigate("/contact") : navigate("/")
    }
    return (
        <>
            <header className='lg:p-4 lg:flex lg:items-center hidden shadow border-b sticky top-0 z-40 bg-[#ffffff]'>
                <img className='lg:w-48' src={CLOUDNINARY_URL + "logo-text.png"} alt="" />
                <div className='mx-auto w-full flex justify-center items-center gap-x-3'>
                    <label className='font-semibold'>{pageTitle}</label>
                    <SelectInput options={OPTIONS} handleChange={handleChange} />
                    <input className='w-3/12 lg:py-1 rounded-md indent-4 outline-none border border-slate-300' type="text" name="search" id="search" placeholder='🔍 Type Something to find template' />
                </div>
                {/* <div>
                    <p>Hello</p>
                </div> */}
            </header>
        </>
    );
};

export default Header;