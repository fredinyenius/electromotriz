import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import AboutUsPage from "../pages/AboutUsPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'productos',
        element: <ProductsPage />
      },
      {
        path: 'productos/:slug',
        element: <ProductPage />
      },
      {
        path: 'servicios',
        element: <h1>Servicios</h1>
      },
      {
        path: 'nosotros',
        element: <AboutUsPage />
      },
      {
        path: 'carrito',
        element: <CartPage />
      }
    ]
  }
]);