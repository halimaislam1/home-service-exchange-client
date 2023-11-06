import React from 'react';
import Banner from './Banner/Banner';
import PricingPlans from './PricingPlan/PricingPlans';
import Testimonial from './Testimonial/Testimonial';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PricingPlans></PricingPlans>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;