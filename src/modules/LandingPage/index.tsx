import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CoffeeMakerOverview from './components/coffee-maker-overview';
import MachineComponents from './components/machine-components';
import VideoWrapper from './components/video-wrapper';
import CarouselContainer from './components/carousel-container';
import FeatureComparison from './components/feature-comparison';
import ReviewWrapper from './components/review-wrapper';
import SubscribeWrapper from './components/subscribe-wrapper';
import { useLocation } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])


    return (
        <>
            <HeroSection />
            <CoffeeMakerOverview />
            <MachineComponents />
            <VideoWrapper />
            <CarouselContainer />
            <FeatureComparison />
            <ReviewWrapper />
            <SubscribeWrapper />
        </>
    );
};

export default LandingPage;