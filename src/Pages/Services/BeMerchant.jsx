import React from "react";
import pic from '../../assets/location-merchant.png'

const BeMerchant = () => {
  return (
    <div>
      <div data-aos='zoom-in-up' className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] my-12 rounded-2xl p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={pic}
          />
          <div>
            <h1 className="text-4xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
            <p className="py-6 text-[#DADADA]">
             We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
            </p>
           <div className="gap-4 lg:flex">
             <button className="btn bg-[#CAEB66] rounded-4xl block mb-4">Become a Merchant</button>
              <button className="btn btn-outline text-[#CAEB66] hover:bg-[#CAEB66] rounded-4xl hover:text-black block">Earn with Profast Courier</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
