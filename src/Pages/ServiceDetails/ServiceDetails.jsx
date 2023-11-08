import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

// style={{
//     backgroundImage: "url(https://i.imgur.com/qBHghNC.png)",
//      backgroundSize: "cover",
//      backgroundRepeat: "no-repeat",
//    }}

const ServiceDetails = () => {
  const singleService = useLoaderData();
  console.log(singleService);
  const { user } = useContext(AuthContext);
  return (
    <div className="mb-10">
      <h1 className="text-4xl text-center  mt-10 mb-10">
        Our Singe Service Details
      </h1>
      <div className="card card-side w-[70%] bg-base-100 shadow-lg mx-auto">
        <figure>
          <img className="h-96" src={singleService.photo} alt="service img" />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-2xl">{singleService.serviceName}</h2>
          <p>{singleService.description}</p>

          <div className="pt-5">
            <div className="flex items-center">
              <TbLocationFilled className="text-xl text-green-800"></TbLocationFilled>
              <p>{singleService.serviceArea}</p>
            </div>
            <div className="flex items-center  gap-2">
              <MdOutlinePriceChange className="text-lime-500 mb-10 text-xl"></MdOutlinePriceChange>
              <span className="mb-11">price:{singleService.price}</span>
            </div>
          </div>

          <div className="flex">
            <span>
              <img
                className="rounded-full w-14 h-14 "
                src={user?.photoURL}
                alt=""
              />
            </span>
            <span>
              <p className="ml-2  font-bold">service Provider:</p>
              <p className="ml-1 ">{user?.displayName}</p>
            </span>
          </div>
          <div className="card-action flex justify-end mr-10 relative ">
            <button className="bg-black p-3 text-white rounded-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
