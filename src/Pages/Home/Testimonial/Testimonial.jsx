import React from "react";

const Testimonial = () => {
 
  return (
    <div style={{ backgroundImage: "url(https://i.imgur.com/lUcXPD1.jpg)" }} className="bg-gray-100 pt-28 pb-32 mt-32 mb-8">
      <div className="text-center">
        <p className="text-xl text-rose-600 mb-3">TESTIMONIAL</p>
        <h1 className="text-4xl mb-16 text-black font-semibold">
          What Clients Say
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto gap-10">
        {/* client 1 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl  mt-16">
          <figure>
            <img
              className="rounded-full border-2 border-red-400 mb-8 w-32 h-32 absolute "
              src="https://i.imgur.com/KPzaE5F.jpg"
              alt="client"
            />
          </figure>
          <div className="card-body relative">
            <p className="mt-14 ml-4">
              I could be happier with the home service I received. The team was
              punctual, thorough, and left my home spotless. I highly recommend
              them for their professionalism and attention to detail!
            </p>
            <div className="rating mx-auto">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
           
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400 "
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
                checked
              />
            </div>
            <h2 className="card-title mx-auto">Lisa Ena</h2>
          </div>
        </div>
        {/* client 2 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-16">
          <figure>
            <img
              className="rounded-full border-2 border-red-400 mb-8 w-32 h-32 absolute "
              src="https://i.imgur.com/rS7cSLF.jpg"
              alt="client"
            />
          </figure>
          <div className="card-body relative">
            <p className="mt-14 ml-3">
              I could be happier with the home service I received. The team was
              punctual, thorough, and left my home spotless. I highly recommend
              them for their professionalism and attention to detail!
            </p>
            <div className="rating mx-auto">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
           
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400 "
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
              />
            </div>
            <h2 className="card-title mx-auto">Jon Doe</h2>
          </div>
        </div>
        {/* client 3 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-16">
          <figure>
            <img
              className="rounded-full border-2 border-red-400 mb-8 w-32 h-32 absolute "
              src="https://i.imgur.com/kzrLWm5.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body relative">
            <p className="mt-14 ml-3">
              I could be happier with the home repairing service I received. The
              team was punctual, thorough, and left my home spotless. I highly
              recommend them for their professionalism and attention to detail!
            </p>
            <div className="rating mx-auto mt-6 ">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
           
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400 "
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-rose-400"
              />
            </div>
            <h2 className="card-title mx-auto">Maksud Reza</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
