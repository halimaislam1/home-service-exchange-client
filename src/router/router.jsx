
import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddService from "../Pages/AddService/AddService";
import Services from "../Pages/Services/Services";
// import PopularService from "../Pages/Home/PopularService/PopularService";
import PrivateRoute from "../../PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader:() => fetch('http://localhost:5000/services')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addservices',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            loader:() => fetch('http://localhost:5000/services')
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader:() => fetch('http://localhost:5000/services')
        },
        
        

      ]
    },
  ]);
 export default router;  