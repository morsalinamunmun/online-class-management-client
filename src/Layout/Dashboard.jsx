import { FaHome } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom"
//import { MdOutlineReviews } from "react-icons/md";
//import { SiCoursera } from "react-icons/si";
//import { ImProfile } from "react-icons/im";
import img from '../assets/classes-icon-17.png'
import { MdEmail, MdClass } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useTeacher from "../hooks/useTeacher";
const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTeacher] = useTeacher();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
                <li className="">
                    <div className="flex ml-2  ">
                        <img className="w-10" src={img} alt="" />
                        <h3 className=" font-bold text-white">Online Wave class</h3>
                    </div>

                </li>
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/'><FaHome></FaHome>Profile</NavLink></li>
                            <li><NavLink to='/dashboard/teacherRequest'>Teacher Request</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaUserFriends /> All User</NavLink></li>
                            <li><NavLink to='/dashboard/allClasses'><MdClass />All Classes</NavLink></li>
                        </>
                            : <>

                            </>
                    }

                    {
                        isTeacher ? <>
                        <li><NavLink to='/dashboard/addClass'>Add Class</NavLink></li>
                        <li><NavLink to='/dashboard'>My Class</NavLink></li>
                        </>
                        :
                        <>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/'><MdEmail /> Contact</NavLink></li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

// {/* <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
//                         <li><NavLink to='/dashboard/profile'><ImProfile />My Profile</NavLink></li>
//                         <li><NavLink to='/myCourse'><SiCoursera />My Course</NavLink></li>
//                         <li><NavLink to='/review'><MdOutlineReviews />Add Review</NavLink></li> */}