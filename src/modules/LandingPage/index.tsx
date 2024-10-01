import React from 'react';
import HeroSection from './components/HeroSection';
import CoffeeMakerOverview from './components/coffee-maker-overview';
import MachineComponents from './components/machine-components';
import VideoWrapper from './components/video-wrapper';
import CarouselContainer from './components/carousel-container';

interface Props {

}

const LandingPage: React.FC<Props> = () => {
    return (
        <>
            <HeroSection />
            <CoffeeMakerOverview />
            <MachineComponents />
            <VideoWrapper />
            <CarouselContainer/>
        </>
    );
};

export default LandingPage;