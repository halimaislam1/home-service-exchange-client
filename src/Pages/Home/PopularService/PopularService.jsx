// import { useLoaderData } from "react-router-dom";


const PopularService = ({popularServices}) => {
    console.log(popularServices);
    console.log("here is popular services", popularServices);
    return (
        <div>
           <h1 className="text-2xl">popular service: {popularServices.length}</h1> 
        </div>
    );
};

export default PopularService;