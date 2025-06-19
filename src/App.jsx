// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./Shared/AuthLayout/AuthLayout";
import NotFound from "./Shared/NotFound/NotFound";
import Login from "./AuthModules/components/Login/Login";
import Register from "./AuthModules/components/Register/Register";
import MasterLayout from "./Shared/MasterLayout/MasterLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./AuthModules/components/Verify";
import Reset from "./AuthModules/components/Reset";
import Forget from "./AuthModules/components/Forget";
import Profile from "./Shared/Profile";
import Diabetes from "./LandingPageModules/components/Services/Diabetes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
    },
    // Auth
    { path: "login", element: <Login />, errorElement: <NotFound /> },
    { path: "register", element: <Register />, errorElement: <NotFound /> },
    {
      path: "verify-password",
      element: <Verify />,
      errorElement: <NotFound />,
    },
    {
      path: "forget-password",
      element: <Forget />,
      errorElement: <NotFound />,
    },
    { path: "reset-password", element: <Reset />, errorElement: <NotFound /> },
    { path: "profile", element: <Profile />, errorElement: <NotFound /> },
    { path: "diabetes", element: <Diabetes />, errorElement: <NotFound /> },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>

      {/* <Verify/> */}
    </>
  );
}

export default App;
