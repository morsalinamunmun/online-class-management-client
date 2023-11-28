import{
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Teach from "../pages/Teach/Teach";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/AddClass/AddClass";
import Dashboard from "../Layout/Dashboard";

import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import TeacherRequest from "../pages/Dashboard/TeacherRequest/TeacherRequest";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/teach',
                element: <PrivateRoute><Teach></Teach></PrivateRoute>
            },
            {
                path: '/addClass',
                element: <AddClass></AddClass>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: 'teacherRequest',
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path: 'profile',
                element: <MyProfile></MyProfile>
            }
        ]
    }
]);