import { createBrowserRouter, Outlet } from "react-router-dom";
import { Auth, User, Admin } from "./pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                path: '/user/:contactId',
                element: <User />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
        ],
    },
    {
        path: '/auth',
        element: <Auth />,
    },
])