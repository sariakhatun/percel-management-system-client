import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientSlider from '../Services/ClientSlider';
import SafeDelivery from '../Services/SafeDelivery';
import BeMerchant from '../Services/BeMerchant';
import HowItWorks from '../HowItWorks/HowItWorks';
import Testimonials from '../Reviews/Testimonials';

const Home = () => {
    return (
        <divr>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <ClientSlider></ClientSlider>
            <SafeDelivery></SafeDelivery>
            <BeMerchant></BeMerchant>
            <Testimonials></Testimonials>
        </divr>
    );
};

export default Home;