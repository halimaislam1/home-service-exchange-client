import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <img className='text-center text-5xl mx-auto' src="https://i.imgur.com/IAH4bd2.png" alt="" />
           <div className="flex justify-center">
           <Link to="/"  className=" text-center  bg-blue-950 text-white p-3 rounded " >Go Back To Home</Link>
           </div>
        </div>
    );
};

export default ErrorPage;