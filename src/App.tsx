import React from 'react';
import {HeroSection} from "./components/HeroSection";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import FeaturesSection from "./components/Features";
import {SpaceGrid} from "./components/Space";

function App() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <FeaturesSection/>
            <SpaceGrid/>
            <Footer/>
        </>
    );
}

export default App;
