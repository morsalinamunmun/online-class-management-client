import{
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Teach from "../pages/Teach/Teach";
import PrivateRoute from "./PrivateRoute";

import Dashboard from "../Layout/Dashboard";

import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import TeacherRequest from "../pages/Dashboard/TeacherRequest/TeacherRequest";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AllClasses from "../pages/Dashboard/AllClass/AllClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import AddAcceptClass from "../pages/AddAcceptClass/AddAcceptClass";
import ClassDetails from "../pages/AddAcceptClass/ClassDetails";
import Payment from "../pages/Payment/Payment";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import TProfile from "../pages/Dashboard/TProfile/TProfile";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/class',
                element: <AddAcceptClass></AddAcceptClass>
            },
            {
                path:'/details/:id',
                element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: 'profile',
                element: <MyProfile></MyProfile>
            },
            
            //admin routes
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'teacherRequest',
                element: <AdminRoute><TeacherRequest></TeacherRequest></AdminRoute>
            },
            {
                path:'allClasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            
            //teacher
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'tProfile',
                element: <TProfile></TProfile>
            }


        ]
    }
]);