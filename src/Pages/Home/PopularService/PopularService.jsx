import { useLoaderData } from "react-router-dom";


const PopularService = () => {
    const popularServices = useLoaderData();
    console.log("here is popular services", popularServices);
    return (
        <div>
           <h1 className="text-2xl">popular service: {PopularService.length}</h1> 
        </div>
    );
};

export default PopularService;