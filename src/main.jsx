import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Service from "./components/Service/Service.jsx";
import ProductDesc from "./components/Product-detail/ProductDesc.jsx";
import Sealentgun from "./components/Categories/sealentgun.jsx";
import Nails from "./components/Categories/Nails.jsx";
import { QuoteProvider } from "./QuoteContext.jsx";
import QuotePages from "./pages/QuotePages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service/>,
      },
      {
        path: "/Product-desc",
        element: <ProductDesc/>,
      },
      {
        path: "/sealent-gun",
        element: <Sealentgun/>,
      },
      {
        path: "/screw",
        element: <Nails/>,
      },
      {
        path:"/quotes",
        element:<QuotePages/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuoteProvider>
    <RouterProvider router={router} />
    </QuoteProvider>
  </React.StrictMode>
);
