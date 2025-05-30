import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage/HomePage";
import AlbumPage from "./components/pages/AlbumPage/AlbumPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // preferred over `path: "/"` in nested route
        element: <HomePage />,
      },
      {
        path: "album/:albumId", // no leading slash in nested route
        element: <AlbumPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
