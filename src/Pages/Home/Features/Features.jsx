import React from "react";

const Features = () => {
  return (
   <div  >
    <div 
     className="text-center mt-20">

        <h1 className="p-5 font-semibold text-3xl md:text-5xl ">
        Our Home Service <br /> Features</h1>
        </div>
     <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 mx-auto max-w-5xl ">
        {/* HouseKeeping  */}
      <div  className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/aAev6zJ.png"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">Cleaning and organizing home</h2>
        </div>
      </div>
        {/* Interior  */}
      <div className="card w-80  ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/0YiHVEv.png"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">Enhancing indoor aesthetics creatively</h2>
        </div>
      </div>
        {/* painting  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/7aQNM1B.png"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">House painting and beautification</h2>
        </div>
      </div>
        {/* shift  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/zUwdSz4.png"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">Relocation and moving assistance</h2>
        </div>
      </div>
        {/* security  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/MBFHM4p.png"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">cameras for enhanced home safety</h2>
        </div>
      </div>
        {/* Electronic  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/S6LtREr.jpg"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">electrical power and maintenance </h2>
        </div>
      </div>
        {/* Air cooler  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/0PwPVua.png"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">Maintenance and repair of air coolers</h2>
        </div>
      </div>
        {/* medical  */}
      <div className="card w-80   ">   
        <div className="card-body items-center text-center">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/v5qlukW.jpg"
            alt="Shoes"
            className="rounded-xl h-20"
          />
        </figure>
          <h2 className="text-sm mt-2">Healthcare and medical assistance</h2>
        </div>
      </div>
        
    </div>
   </div>
  );
};

export default Features;
