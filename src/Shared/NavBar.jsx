import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
   const navLink =   <>
      <li className="font-bold text-white ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold text-white bg-black">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="font-bold text-white bg-black">
        <NavLink to="/services">Add Services</NavLink>
      </li>
      {/* <li className="dropdown font-bold text-white bg-black hidden ">
        <NavLink to="/services">dashboard</NavLink>
        <>
        <NavLink to="/myservices">My Services</NavLink>
        <NavLink to="/addservices">Add Services</NavLink>
        <NavLink to="/myservices">My Schedules</NavLink>
        </>
      </li> */}
    </>

    return (
    <div className="navbar max-w-70% bg-black sticky top-0 z-20 shadow-lg ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost text-white  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLink}
      </ul>

    </div>
    <div className="flex ml-5">
        <img className="h-10 w-14" src="https://i.imgur.com/5DCw3mi.png" alt="" />
        <p className=" text-sm font-serif font-bold normal-case text-transparent  bg-clip-text bg-gradient-to-r from-white to-rose-400">Home Service <br /> Exchange</p>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div>

{/* <select className="select select-bordered bg-black hidden  text-white font-bold select-md w-full max-w-xs">
  <option className="mr-3" disabled selected>dashboard </option>
  <option>My Services</option>
  <option>Add Services</option>
  <option>My Schedules</option>
</select> */}

  </div>

  <div className="mr-14 ">
    <Link to='/login'><button className="btn rounded-md bg-black text-white px-3 py-0 ">Login</button></Link>
  </div>
</div>
    );
};

export default NavBar;