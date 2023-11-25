import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/classes-icon-17.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    const menus = <>
        <li><NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-teal-300" : ""}>Home</NavLink></li>
        <li><NavLink to='/class' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-teal-300" : ""}>All Classes</NavLink></li>
        <li><NavLink to='/teach' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-teal-300" : ""}>Teach on Online Wave</NavLink></li>
    </>
    return (
        <div className="navbar fixed z-10 text-white bg-teal-500 bg-opacity-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menus}
                    </ul>
                </div>
                    <img className="w-10" src={logo} alt="" />
                    <Link to='/' className="ml-3 font-semibold normal-case text-xl">Online Wave Class </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user ? 
                    <>
                         <div className="dropdown dropdown-end">
                            <label   tabIndex ={0} className="btn btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="p-2 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box w-36 text-teal-500">
                                <li className="font-semibold text-center mb-2">{user?.displayName}</li>
                                <Link>Dashboard</Link>
                                <div className="divider"></div>
                                <li><a onClick={handleLogOut} className="font-semibold btn border-0 bg-teal-500 text-white">Sign Out</a></li>
                            </ul>
                        </div>                       
                    </> : 
                    <Link to='/login' className= "font-semibold btn border-0 bg-teal-500 text-white">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;