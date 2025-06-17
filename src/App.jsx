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

function App() {
  const routes = createBrowserRouter([

    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
    },
    // Auth
    {path: 'login', element: <Login/>,
      errorElement: <NotFound />,
    },
        {path: 'register', element: <Register/>,
      errorElement: <NotFound />,
    },
  ]);


  //   {
  //     path: "/",
  //     element: <AuthLayout />,
  //     errorElement: <NotFound />,
  //     children: [
  //       { index: true, element: <Login /> },
  //       { path: "login", element: <Login /> },
  //       { path: "register", element: <Register /> },
  //     ],
  //   },
  //   // Master Layout
  //   {path: 'home', element: <MasterLayout/>,
  //     errorElement: <NotFound />,
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
