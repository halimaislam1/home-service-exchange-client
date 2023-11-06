import React from 'react';
import Banner from './Banner/Banner';
import PricingPlans from './PricingPlan/PricingPlans';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PricingPlans></PricingPlans>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;