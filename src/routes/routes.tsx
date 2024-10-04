import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoaderBar from "../components/loadingBar";

const LandingPage = lazy(() => import("../modules/LandingPage"));
const ContactUs = lazy(() => import("../modules/ContactUs"));
const Body = lazy(() => import("../modules/Body"));

export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<LoaderBar />}>
                <Body />
            </Suspense>),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoaderBar />}>
                        <LandingPage />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<LoaderBar />}>
                        <ContactUs />
                    </Suspense>
                ),
            }
        ]
    }
]);


