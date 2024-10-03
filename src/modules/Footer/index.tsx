import React from 'react';
import { PiEnvelopeThin } from "react-icons/pi"
import { GoDotFill } from "react-icons/go";
import QuerySectionStats from '../../components/QuerySectionStats';


const Footer: React.FC = () => {
    return (
        <>
            <footer className='border-t my-4 lg:px-24 px-10 py-10'>
                <div className='flex flex-col gap-y-5 lg:pb-24 pb-12  border-b'>
                    <p className='lg:text-6xl text-3xl font-semibold flex items-end'>Vince<span className='lg:text-2xl text-green-600'><GoDotFill /></span></p>
                    <div>
                        <QuerySectionStats title={"Email"} data={"info@ecomposershop.com"} />
                        <QuerySectionStats title={"Contact No"} data={"(212) 555-731"} />
                    </div>
                    <div>
                        <p className='lg:text-lg text-slate-500 mb-3'>Sign up for sale, new arrivals & more.</p>
                        <div className='inline-block'>
                            <div className='flex items-center border border-black p-2 gap-x-3'>
                                <p className='lg:text-5xl text-xl'>
                                    <PiEnvelopeThin />
                                </p>
                                <input className="outline-none" type="email" name="email" id="email" placeholder='Email address' />
                                <button className='bg-black text-white lg:px-4 lg:py-2 px-2 py-1 rounded'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-3 text-center'>
                    <p className='text-slate-500'>©️ 2024 EComposer Store. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;