import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Navigation from "../components/navigation/Navigation";
import PreviousOwnerForm from "../pages/previousOwner/PreviousOwner";
import AddCars from "../pages/cars/AddCars";
import React from "react";
import CustomerRegistration from "../pages/customer/CustomerRegistration";
import CoustomerLogin from "../pages/customer/CustomerLogin";
import PrivateRoute from "./PrivateRoutes";

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
            <PrivateRoute>
                <div>
                <Navigation></Navigation>
                <PreviousOwnerForm></PreviousOwnerForm>
                </div>
            </PrivateRoute>
        )
    },
    {
        path: '/add-car-form', element: (
            <PrivateRoute>
                <div>
                <Navigation></Navigation>
                <AddCars></AddCars>
                </div>
            </PrivateRoute>
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
    }



])