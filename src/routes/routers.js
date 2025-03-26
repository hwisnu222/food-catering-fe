import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import About from "../pages/About";
import DetailProduct from "../pages/DetailProduct";
import { createBrowserRouter } from "react-router";
import AdminLayout from "../components/layouts/AdminLayout";
import Order from "../pages/admin/Order";
import ProductList from "../pages/admin/Product";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/products",
        Component: Product,
      },
      {
        path: "/products/:id",
        Component: DetailProduct,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: Order,
      },
      {
        path: "products",
        Component: ProductList,
      },
    ],
  },
]);
