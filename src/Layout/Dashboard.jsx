import { FaHome } from "react-icons/fa";
import {Outlet, NavLink} from "react-router-dom"
import { MdOutlineReviews } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import img from '../assets/classes-icon-17.png'
const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
                <ul className="menu">
                    <li className="">
                       <div className="flex ml-2  ">
                       <img className="w-10" src={img} alt="" />
                        <h3 className=" font-bold text-white">Online Wave class</h3>
                       </div>
                        
                    </li>
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/profile'><ImProfile />My Profile</NavLink></li>
                    <li><NavLink to='/review'><MdOutlineReviews />Add Review</NavLink></li>
                    <li><NavLink to='/dashboard/teacherRequest'>Teacher Request</NavLink></li>
                    <li><NavLink to='/myCourse'><SiCoursera />My Course</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;