import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLocationDot } from 'react-icons/fa6';

const Services = () => {
  const { user } = useContext(AuthContext);
  const allServices = useLoaderData();
  console.log("here is all services", allServices);
  return (
    <div className="grid grid-cols-1  max-w-4xl mx-auto mt-20">
      <span className="mx-auto"><img className="w-16 " src="https://i.imgur.com/JHOf3wu.jpg" alt="" /></span>
      <h1 className="text-center text-5xl  font-bold ">
       Our  All  Home  Services
      </h1>
      <p className="mt-2 ml-4 fond-semibold text-gray-600 
      ">Home services encompass a diverse range of professional solutions aimed at enhancing the quality of life within a residential environment. These services cover various aspects, including maintenance, repair, design, and improvement. Whether its shifting,plumbing,interior design, painting,health and cleaning  electrical work services etc for the essential infrastructure.</p>
      <div className="grid grid-cols-1 mt-10">
        {allServices.map((service) => (
          <div
            key={allServices._id}
            className="card lg:card-side rounded-md bg-base-100 border mb-6"
          >
            <figure>
              <img className="h-96 " src={service.photo} alt="interior img" />
            </figure>
            <div className="card-body w-[65%]">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-2xl mb-3 font-bold text-black">
                    {service.serviceName}
                  </h2>
                  <p className="text-black font-serif font-medium">
                    {service.description}
                  </p>
                </div>

              </div>
              <span className="my-6 ">
              
               <p className="font-md text-black gap-1 font-serif flex items-center">
                  <FaLocationDot></FaLocationDot>
                  Service Area : {service.serviceArea}
                </p>
                
            
                <p className="font-md text-black font-serif">
                  Service Price : {service.price}
                </p>
              </span>
              <span className="flex ">
                 <span >
                  <p className="ml-16 font-bold">service Provider:</p>
                 <p className="ml-16 ">{user?.displayName}</p>
                 </span>
                <img
                  className="rounded-full w-14 h-14 absolute mb-20 "
                  src={user?.photoURL}
                  alt=""
                />    
              </span>
              
              <span className="flex justify-end relative top-4 left-3 bottom-5 ">
                <button className="bg-black p-3 text-white rounded">
                  View Details
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
