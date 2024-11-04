import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Navigation from "../components/navigation/Navigation";
import PreviousOwnerForm from "../pages/previousOwner/PreviousOwner";
import AddCars from "../pages/cars/AddCars";
import React from "react";
import CustomerRegistration from "../pages/customer/CustomerRegistration";
import CoustomerLogin from "../pages/customer/CustomerLogin";
import PrivateRoute from "./PrivateRoutes";
import Payment from "../pages/payment/Payment";
import PurchaseDetails from "../pages/payment/PurchaseDetails";
import KnowDetails from "../pages/customer/KnowDetails";
import AdminAuthen from "../Admin/AdminAuthen";
import AdminNav from "../Admin/AdminNav";
import SalesHistory from "../Admin/SalesHistory";

export const routes = createBrowserRouter([
    {
        path: '/', element: (
            <div>
                <Navigation />
                <Home />
            </div>
        )
    },
    {
        path: '/previous-owner-form', element: (
            <PrivateRoute>
                <div>
                    <Navigation />
                    <PreviousOwnerForm />
                </div>
            </PrivateRoute>
        )
    },
    {
        path: '/add-car-form', element: (
            <PrivateRoute>
                <div>
                    <Navigation />
                    <AddCars />
                </div>
            </PrivateRoute>
        )
    },
    {
        path: '/customer-reg', element: (
            <div>
                <Navigation />
                <CustomerRegistration />
            </div>
        )
    },
    {
        path: '/customer-login', element: (
            <div>
                <Navigation />
                <CoustomerLogin />
            </div>
        )
    },
    {
        path:'/payment',
        element: (
            <PrivateRoute>
                <Payment />
            </PrivateRoute>
        )
    },
    {
        path:'/purchase-details',
        element: (
            <PrivateRoute>
                <PurchaseDetails />
            </PrivateRoute>
        )
    },
    {
        path: '/know-details',
        element: (
            <PrivateRoute>
                <KnowDetails />
            </PrivateRoute>
        )
    },
    {
        path: '/admin', element: (
            <div>
                <AdminAuthen />
            </div>
        )
    },
    {
        path: '/sales', element: (
            <div>
                <AdminNav />
                <SalesHistory />
            </div>
        )
    }
]);
