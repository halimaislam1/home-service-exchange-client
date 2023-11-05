import { BsArrowRight } from 'react-icons/bs';

const PricingPlans = () => {
  return (
    <div className="mt-28 p-2 bg-base-200 ">
        
      <div className="text-center mt-8 ">
        <p className="font-md text-rose-500 font-mono text-xl mb-2">Special offers</p>
        <h1 className="text-6xl text-black font-bold mb-12">Pricing Plans</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12  mb-16 bg-base-200 '>
        {/* Silver Pack */}
      <div className="card w-96 bg-white border shadow-lg ">
        <div className="">
        <p className="text-5xl mt-16 mb-3 font-bold text-black text-center">Silver Pack</p>
          <h2 className="text-6xl mb-2 font-bold text-black text-center">$20.00</h2>
          <p className="text-gray-500 text-center">Per Month</p>
        </div>
        <div className="card-body items-center text-center">
          <p>Interior design services encompass planning, arranging, and decorating spaces to optimize aesthetics, functionality, and comfort. Designers select furniture, colors, lighting, and materials to create personalized, harmonious interiors.</p>
          <div className="mt-3 flex items-center ">
            <button className="px-8 py-4 rounded-full mr-3 mb-2  bg-rose-500 text-white">Get Now</button>
            <BsArrowRight className='text-3xl text-rose-600'></BsArrowRight>
          </div>
        </div>
      </div>
      {/* Gold Pack */}
      <div className="card w-96 bg-white border shadow-lg">
        <div className="">
        <p className="text-5xl mt-16 mb-3 font-bold text-black text-center">Gold Pack</p>
          <h2 className="text-6xl mb-2 font-bold text-black text-center">$50.00</h2>
          <p className="text-gray-500 text-center">Per Month</p>
        </div>
        <div className="card-body items-center text-center">
          <p>Electronic services encompass digital offerings like online banking, e-commerce, streaming, and communication tools, enabling access, convenience, and efficiency for various transactions, entertainment, and information exchange.</p>
          <div className="mt-3 flex items-center ">
            <button className="px-8 py-4 rounded-full mr-3 mb-2   bg-rose-500 text-white">Get Now</button>
            <BsArrowRight className='text-3xl text-rose-600'></BsArrowRight>
          </div>
        </div>
      </div>
      {/* Platinum Pack */}
      <div className="card w-96 bg-white border shadow-lg">
        <div className="">
        <p className="text-5xl mt-16 mb-3 font-bold text-black text-center">Platinum Pack</p>
          <h2 className="text-6xl mb-2 font-bold text-black text-center">$70.00</h2>
          <p className="text-gray-500 text-center">Per Month</p>
        </div>
        <div className="card-body items-center text-center">
          <p>Shift services offering assistance with relocating belongings, often provided by moving companies. They include packing, loading, transportation, and unpacking to streamline the process of moving to a new location.</p>
          <div className="mt-3 flex items-center ">
            <button className="px-8 py-4 rounded-full mr-3 mb-2   bg-rose-500 text-white">Get Now</button>
            <BsArrowRight className='text-3xl text-rose-600'></BsArrowRight>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PricingPlans;
