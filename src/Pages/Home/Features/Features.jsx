import React from "react";

const Features = () => {
  return (
   <div >
    <div 
     className="text-center mt-20">
        <h1 className="p-5   justify-center bg-gradient-to-r from-blue-400 via-green-500 to-amber-500 inline-block text-transparent bg-clip-text font-bold text-5xl ">
        Our Home <br /> Service  Features</h1>
        </div>
     <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto ">
        {/* HouseKeeping  */}
      <div  className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/aAev6zJ.png"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">Cleaning and organizing homes professionally</h2>
        </div>
      </div>
        {/* Interior  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/0YiHVEv.png"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">Enhancing indoor aesthetics creatively</h2>
        </div>
      </div>
        {/* painting  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/7aQNM1B.png"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">House painting and beautification</h2>
        </div>
      </div>
        {/* shift  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/zUwdSz4.png"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">Relocation and moving assistance</h2>
        </div>
      </div>
        {/* security  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/MBFHM4p.png"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">cameras for enhanced home safety</h2>
        </div>
      </div>
        {/* Electronic  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/S6LtREr.jpg"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">electrical power and maintenance </h2>
        </div>
      </div>
        {/* Air cooler  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/0PwPVua.png"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">Maintenance and repair of air coolers</h2>
        </div>
      </div>
        {/* medical  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/v5qlukW.jpg"
            alt="Shoes"
            className="rounded-xl h-36"
          />
        </figure>
          <h2 className="card-title">Healthcare and medical assistance</h2>
        </div>
      </div>
        
    </div>
   </div>
  );
};

export default Features;
