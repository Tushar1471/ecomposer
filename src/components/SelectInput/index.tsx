import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectionProps {
    options: Option[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectionProps> = ({ handleChange, options }) => {
    return (
        <>
            <select onChange={handleChange} className='shadow rounded bg-white lg:px-2 lg:py-1 lg:text-md border border-slate-400 ' name="page" id="page">
                {
                    options.map((el, index) => (
                        <option key={index} value={el?.value}>{el?.label}</option>
                    ))
                }
            </select>
        </>
    );
};

export default SelectInput;