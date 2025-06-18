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
        { path: "verify", element: <Verify />, errorElement: <NotFound /> },





    // {path: "verify-account", element: <VerifyAccount />, errorElement: <NotFound />,},
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
