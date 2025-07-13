import { createBrowserRouter } from "react-router";
import React, { Suspense } from "react";
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

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="text-lg">Loading...</div>
  </div>
);

// Wrapper component for Suspense
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <Home />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/home",
    element: (
      <SuspenseWrapper>
        <Home />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/about",
    element: (
      <SuspenseWrapper>
        <About />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/contact",
    element: (
      <SuspenseWrapper>
        <Contact />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/store",
    element: (
      <SuspenseWrapper>
        <Store />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/product/",
    element: (
      <SuspenseWrapper>
        <ProductDetails />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <SuspenseWrapper>
        <Login />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/registration",
    element: (
      <SuspenseWrapper>
        <Registration />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/blog",
    element: (
      <SuspenseWrapper>
        <Blog />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/blog-details",
    element: (
      <SuspenseWrapper>
        <BlogDetails />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/product-author",
    element: (
      <SuspenseWrapper>
        <ProductAuthor />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/faq",
    element: (
      <SuspenseWrapper>
        <Faq />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/test/components",
    element: (
      <SuspenseWrapper>
        <TestComponents />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/*",
    element: (
      <SuspenseWrapper>
        <NotFound />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

export default router;
