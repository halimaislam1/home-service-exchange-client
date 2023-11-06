import { useLoaderData } from "react-router-dom";

const Services = () => {
    const allServices = useLoaderData();
    console.log('here is all services',allServices);
    return (
        <div>
            <h2>This is services route</h2>
        </div>
    );
};

export default Services;