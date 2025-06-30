import { createBrowserRouter } from "react-router";
import React from "react";
// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Contact from "../pages/Contact/Contact";
// import Store from "../pages/Store/Store";
// import ProductDetails from "../pages/ProductDetails/ProductDetails";
// import Login from "../pages/Login/Login";
// import Registration from "../pages/Registration/Registration";
// import Blog from "../pages/Blog/Blog";
// import BlogDetails from "../pages/BlogDetails/BlogDetails";
// import ProductAuthor from "../pages/ProductAuthor/ProductAuthor";
// import Faq from "../pages/Faq/Faq";
// import NotFound from "../pages/NotFound/NotFound";
// import TestComponents from "../pages/TestComponents/TestComponents";
import Cart from "../components/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
//Lazy loading components
const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const Store = React.lazy(() => import("../pages/Store/Store"));
const ProductDetails = React.lazy(() =>
  import("../pages/ProductDetails/ProductDetails")
);
const Login = React.lazy(() => import("../pages/Login/Login"));
const Registration = React.lazy(() =>
  import("../pages/Registration/Registration")
);
const Blog = React.lazy(() => import("../pages/Blog/Blog"));
const BlogDetails = React.lazy(() =>
  import("../pages/BlogDetails/BlogDetails")
);
const ProductAuthor = React.lazy(() =>
  import("../pages/ProductAuthor/ProductAuthor")
);
const Faq = React.lazy(() => import("../pages/Faq/Faq"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
const TestComponents = React.lazy(() =>
  import("../pages/TestComponents/TestComponents")
);

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
    path: "/product/",
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
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
]);

export default router;
