import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Option {
    to: string;
    value: string;
    label: string;
}

interface SelectionProps {
    options: Option[];
}

const SelectInput: React.FC<SelectionProps> = ({ options }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedValue, setSelectedValue] = useState<string>("");

    useEffect(() => {
        const currentPath = location.pathname;

        const matchedOption = options.find(option => option.to === currentPath);

        if (matchedOption) {
            setSelectedValue(matchedOption.value);
        } else {
            setSelectedValue("");
        }
    }, [location, options]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const selectedRoute = options.find(option => option.value === e.target.value);
        if (selectedRoute) {
            navigate(selectedRoute.to);
        }
    };

    return (
        <>
            <select
                onChange={handleChange}
                value={selectedValue}
                className='shadow rounded bg-white px-2 lg:py-1 text-md border border-slate-400'
                name="page"
                id="page"
            >
                {options.map((el, index) => (
                    <option key={index} value={el.value}>
                        {el.label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectInput;
