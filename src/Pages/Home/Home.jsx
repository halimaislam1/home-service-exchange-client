import React from 'react';
import Banner from './Banner/Banner';
import PricingPlans from './PricingPlan/PricingPlans';
import Testimonial from './Testimonial/Testimonial';
import Features from './Features/Features';
import PopularService from './PopularService/PopularService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularService></PopularService>
            <PricingPlans></PricingPlans>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;