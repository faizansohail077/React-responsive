import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pricing from '../../components/Pricing/Pricing'
import { HomeObjfour, HomeObjOne, HomeObjthree, HomeObjtwo } from './Data'

const Home = () => {
    return (
        <>
            <HeroSection{...HomeObjOne} />
            <HeroSection{...HomeObjtwo} />
            <HeroSection{...HomeObjthree} />
            <Pricing/>
            <HeroSection{...HomeObjfour} />
        </>
    )
}

export default Home
