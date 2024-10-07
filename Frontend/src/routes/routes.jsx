import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Navigation from "../components/navigation/Navigation";
import PreviousOwnerForm from "../components/previousOwner/PreviousOwner";
import React from "react";

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
            <div>
                <Navigation></Navigation>
                <PreviousOwnerForm></PreviousOwnerForm>
            </div>
        )
    }


])