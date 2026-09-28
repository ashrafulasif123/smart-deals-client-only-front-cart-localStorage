import { createBrowserRouter } from "react-router";
import { Root } from "../layout/Root";
import { Home } from "../pages/Home";
import { AllProducts } from "../pages/AllProducts";
import { MyProducts } from "../pages/MyProducts";
import { MyBids } from "../pages/MyBids";
import { RootSecond } from "../layout/RootSecond";
import { CreateProduct } from "../pages/CreateProduct";
import { AuthLayout } from "../layout/AuthLayout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import axios from "axios";
import { ViewDetails } from "../pages/ViewDetails";
import { Cart2 } from "../pages/Cart2";
// import { Cart } from "../pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => axios.get("/products.json"),
        Component: Home,
      },
      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
      },
      // {
      //   path: "cart",
      //   element: <Cart></Cart>,
      // },
      {
        path: "cart2",
        element: <Cart2></Cart2>,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: "myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "myBids",
        element: <MyBids></MyBids>,
      },
    ],
  },
  {
    Component: RootSecond,
    children: [
      {
        path: "createProduct",
        Component: CreateProduct,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
