import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
//import AboutUsPage from "../pages/AboutUsPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/Login";
import ProductMaintenancePage from "../pages/ProductsMaintenancePage";
import BackofficeLayout from "../layouts/BackofficeLayout";
import ProductReportPage from "../pages/ProductReportPage";
//import LoginPage from "../pages/LoginPage";
//import RegisterPage from "../pages/RegisterPage";
//import AuthValidation from "./AuthValidation";

export const primaryRoute = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "productos",
        element: <ProductsPage />,
      },
      {
        path: "productos/:slug",
        element: <ProductPage />,
      },
      {
        path: "carrito",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/mantenimiento",
    element: <BackofficeLayout />,
    children: [
      {
        path: "productos",
        element: <ProductMaintenancePage />,
      },
      {
        path: "reportes",
        element: <ProductReportPage />,
      },
    ],
  },
]);
