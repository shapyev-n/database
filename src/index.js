import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContext from "./context/ProductContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./components/Admin/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/admin',
        element:<Admin/>
    },
])


root.render(
  <ProductContext>
    <RouterProvider router={router}/>
  </ProductContext>
);
