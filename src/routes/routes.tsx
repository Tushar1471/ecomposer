import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../modules/LandingPage";
import ContactUs from "../modules/ContactUs";
import Body from "../modules/Body";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            {
                index:true,
                element:<LandingPage/>,
            },
            {
                path:"/contact",
                element:<ContactUs/>,
            }
        ]
    }
]);

