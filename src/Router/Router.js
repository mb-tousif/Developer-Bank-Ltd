import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import MoneyTransfer from "../Pages/Dashboard/MoneyTransfer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/> ,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Register/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout/>,
                // errorElement: <DisplayError></DisplayError>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard/>
                    },
                    {
                        path: '/dashboard/moneyTransfer',
                        element: <MoneyTransfer/>
                    },
                ]
            }
        ]
    },
    
])

export default router;