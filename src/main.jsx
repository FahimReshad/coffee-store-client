import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AuthProvider from "./Provider/AuthProvider";
import Users from "./Components/Users";
import MainLayout from "./MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App></App>,
    element: <MainLayout></MainLayout>,
    loader: () => fetch('https://coffee-store-server-8lb1zl3x9-fahim-reshads-projects.vercel.app')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-8lb1zl3x9-fahim-reshads-projects.vercel.app/${params.id}`)
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-8lb1zl3x9-fahim-reshads-projects.vercel.app')
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
