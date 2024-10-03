import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LandingPage = lazy(() => import("../modules/LandingPage"));
const ContactUs = lazy(() => import("../modules/ContactUs"));
const Body = lazy(() => import("../modules/Body"));

export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading.....</div>}>
                <Body />
            </Suspense>),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<div>Loading LandingPage...</div>}>
                        <LandingPage />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<div>Loading ContactPage...</div>}>
                        <ContactUs />
                    </Suspense>
                ),
            }
        ]
    }
]);


