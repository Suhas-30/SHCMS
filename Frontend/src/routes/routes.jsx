import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Navigation from "../components/navigation/Navigation";
import PreviousOwnerForm from "../pages/previousOwner/PreviousOwner";
import AddCars from "../pages/cars/AddCars";
import React from "react";
import CustomerRegistration from "../pages/customer/CustomerRegistration";
import CoustomerLogin from "../pages/customer/CustomerLogin";
import PrivateRoute from "./PrivateRoutes";
<<<<<<< HEAD
import Payment from "../pages/payment/Payment";
import PurchaseDetails from "../pages/payment/PurchaseDetails";
import KnowDetails from "../pages/customer/KnowDetails";
import AdminAuthen from "../Admin/AdminAuthen";
import AdminNav from "../Admin/AdminNav";
import SalesHistory from "../Admin/SalesHistory";
=======

>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
export const routes = createBrowserRouter([
    {
        path: '/', element: (
            <div>
                <Navigation></Navigation>
                <Home></Home>
            </div>
        )
    },
    {
        path: '/previous-owner-form', element: (
<<<<<<< HEAD
                <div>
                <AdminNav></AdminNav>
                <PreviousOwnerForm></PreviousOwnerForm>
                </div>
=======
            <PrivateRoute>
                <div>
                <Navigation></Navigation>
                <PreviousOwnerForm></PreviousOwnerForm>
                </div>
            </PrivateRoute>
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
        )
    },
    {
        path: '/add-car-form', element: (
<<<<<<< HEAD
                <div>
                <AdminNav></AdminNav>
                <AddCars></AddCars>
                </div>

=======
            <PrivateRoute>
                <div>
                <Navigation></Navigation>
                <AddCars></AddCars>
                </div>
            </PrivateRoute>
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
        )
    },

    {
        path: '/customer-reg', element: (
            <div>
                <Navigation></Navigation>
                <CustomerRegistration></CustomerRegistration>
            </div>
        )
    },
    {
        path: '/customer-login', element:(
            <div>
                <Navigation></Navigation>
                <CoustomerLogin></CoustomerLogin>
            </div>
        )
<<<<<<< HEAD
    },
    {
        path:'/payment',
        element: (
            <div>
                <PrivateRoute>
                <Payment></Payment>
                </PrivateRoute>
            </div>
        )
    },
    {
        path:'/purchase-details',
        element: (
            <div>
                <PrivateRoute>
                <PurchaseDetails></PurchaseDetails>
                </PrivateRoute>
            </div>
        )
    },
    {
        path: '/know-details',
        element:(
            <div>
                <PrivateRoute>
                <KnowDetails></KnowDetails>
                </PrivateRoute>
            </div>
        )
    },
    {
        path: '/admin', element:(
            <div>
                <AdminAuthen></AdminAuthen>
            </div>
        )
    },{
        path: '/sales', element:(
            <div>
                <AdminNav></AdminNav>
                <SalesHistory></SalesHistory>
            </div>
        )
=======
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
    }
])