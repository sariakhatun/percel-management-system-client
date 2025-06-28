import React from 'react';
import live from '../../assets/live-tracking.png'
import safe from '../../assets/safe-delivery.png'
const SafeDelivery = () => {
    return (
        <div className='mb-12 border-b-2 border-base-400 border-dashed pb-8  border-b-gray-500'>
            <h1 className='text-center font-bold mb-8 mt-12 text-2xl text-primary'>Why Choose Us</h1>
            {/* card one */}
            <div className='rounded-2xl lg:flex gap-12 items-center p-8 bg-white mb-8'>
                <div className='lg:border-r-2 border-dashed border-r-gray-400 flex justify-center mb-6'>
                <img src={live} alt="" className='lg:pr-12'/>
                </div>
               
                <div className='text-center lg:text-left'>
                    <h1 className='mb-4 text-2xl font-bold'>Live Parcel Tracking</h1>
                    <p className='text-[#606060]'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
               </div>
            </div>
            {/* card two */}
            <div className='rounded-2xl lg:flex  gap-12 items-center p-8 bg-white mb-8'>
                 <div className='lg:border-r-2 lg:border-dashed border-r-gray-400 flex items-center justify-center mb-6'>
                <img src={safe} alt="" className='lg:pr-12'/>
                </div>
               
                <div className='text-center lg:text-left'>
                    <h1 className='mb-4 text-2xl font-bold'>100% Safe Delivery</h1>
                    <p className='text-[#606060]'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
               </div>
            </div>
            {/* card three */}
            <div className='rounded-2xl lg:flex  gap-12 items-center p-8 bg-white mb-8'>
                 <div className='lg:border-r-2 lg:border-dashed border-r-gray-400 flex items-center justify-center mb-6'>
                <img src={safe} alt="" className='lg:pr-12'/>
                </div>
               
                <div className='text-center lg:text-left'>
                    <h1 className='mb-4 text-2xl font-bold'>24/7 Call Center Support</h1>
                    <p className='text-[#606060]'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us and we are always available for you.</p>
               </div>
            </div>
           
        </div>
    );
};

export default SafeDelivery;