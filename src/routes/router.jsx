import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Store from "../pages/Store/Store";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import ProductAuthor from "../pages/ProductAuthor/ProductAuthor";
import Faq from "../pages/Faq/Faq";
import NotFound from "../pages/NotFound/NotFound";
import TestComponents from "../pages/TestComponents/TestComponents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/store",
    element: <Store></Store>,
  },
  {
    path: "/product-details",
    element: <ProductDetails></ProductDetails>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/blog-details",
    element: <BlogDetails></BlogDetails>,
  },
  {
    path: "/product-author",
    element: <ProductAuthor></ProductAuthor>,
  },
  {
    path: "/faq",
    element: <Faq></Faq>,
  },
  {
    path: "/test/components",
    element: <TestComponents></TestComponents>,
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
