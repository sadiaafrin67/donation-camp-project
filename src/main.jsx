import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRoutes from './CreatedRoutes/CreatedRoutes';





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={myCreatedRoutes} />
  </React.StrictMode>
);
