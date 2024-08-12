import { createBrowserRouter } from "react-router-dom";
import ClinetLayout from "../pages/client";
import ClientHome from "../pages/client/Home";
import ProductInfo from "../pages/client/ProductInfo";
import AdminLayout from "../pages/admin/dashboard";
import GetProduct from "./../components/Dashboard/GetProduct/GetProduct";
import GetCategories from "../components/Dashboard/GetCategories/GetCategories";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ClinetLayout />,
    children: [
      {
        index: true,
        element: <ClientHome />,
      },
      {
        path: "products/:productId",
        element: <ProductInfo />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,

    children: [
      { index: true, element: <GetProduct /> },
      {
        path: "categories",
        element: <GetCategories />,
      },
    ],
  },
]);
