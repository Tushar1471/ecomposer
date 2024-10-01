import React, { useState } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

interface CarouselProps {
    slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 lg:h-[65vh] bg-cover bg-center text-white flex items-center justify-center rounded-xl"
                        style={{ backgroundImage: `url(${slide})` }}
                    >
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white text-slate-800 hover:bg-yellow-800 hover:text-white rounded-full focus:outline-none shadow-lg cursor-pointer"
            >
                <GrLinkPrevious />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white text-slate-800 hover:bg-yellow-800 hover:text-white rounded-full focus:outline-none shadow-lg cursor-pointer"
            >
                <GrLinkNext />
            </button>
        </div>
    );
};

export default Carousel;
