import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layouts/Layout";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import DetailProduct from "./pages/DetailProduct";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/cart",
    component: <Cart />,
  },
  {
    path: "/products",
    component: <Product />,
  },
  {
    path: "/products/:id",
    component: <DetailProduct />,
  },
];

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route, index) => {
          if (route.children) {
            <Route path={route.path} element={route.component} />;
          }
        })}
      </Route>
    </Routes>
  );
}

export default App;
