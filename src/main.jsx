import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portofilio from "./components/Portofilio/Portofilio.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portofilio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
