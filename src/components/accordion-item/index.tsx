import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

interface AccordionItemProps {
  content: string;
  isOpen: boolean;
  label: string;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ label, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-400 borderCross">
      <div
        className="flex justify-between items-center lg:p-10 p-5 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="lg:text-2xl text-lg font-semibold">{label}</h2>
        <span className={`border lg:p-2 rounded-full hover:bg-[#E0E0FF] ${isOpen && "bg-[#E0E0FF]"}`}>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out lg:px-0 px-4 ${isOpen ? 'lg:max-h-36 max-h-56' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.3s ease-in-out' }}
      >
        <div className="lg:w-8/12 text-justify lg:px-10 lg:text-lg text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;