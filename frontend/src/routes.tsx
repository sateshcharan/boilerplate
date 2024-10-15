import { createBrowserRouter, redirect } from "react-router-dom";

// pages
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Analytics from "@/pages/dashboard/Analytics";
import Sales from "@/pages/dashboard/Sales";
import Settings from "@/pages/profile/Settings";
import Overview from "@/pages/profile/Overview";
import Projects from "@/pages/profile/Projects";
import NewUser from "@/pages/users/NewUser";
import Billing from "@/pages/account/Billing";
import Invoice from "@/pages/account/Invoice";
import Timeline from "@/pages/projects/Timeline";
import Widget from "@/pages/Widget";
import Charts from "@/pages/Charts";
import Notifications from "@/pages/Notifications";
import Kanban from "@/pages/applications/Kanban";
import Wizard from "@/pages/applications/Wizard";
import DataTables from "@/pages/applications/DataTables";
import Calendar from "@/pages/applications/Calendar";
import NewProduct from "@/pages/ecommerce/products/NewProduct";
import EditProduct from "@/pages/ecommerce/products/EditProduct";
import ProductPage from "@/pages/ecommerce/products/ProductPage";
import OrderLIst from "@/pages/ecommerce/orders/OrderLIst";
import OrderDetails from "@/pages/ecommerce/orders/OrderDetails";
import SignInBasic from "@/pages/authentication/signIn/SignInBasic";
import SignInCover from "@/pages/authentication/signIn/SignInCover";
import SignUpCover from "@/pages/authentication/signUp/SignUpCover";
import ResetCover from "@/pages/authentication/reset/ResetCover";
import SignInIllustration from "@/pages/authentication/signIn/SignInIllustration";

// layouts
import PageLayout from "@/layouts/PageLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import CoverLayout from "@/layouts/CoverLayout";
import IllustrationLayout from "@/layouts/IllustrationLayout";

const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "pricing",
    element: <CoverLayout />,
    children: [
      {
        index: true,
        element: <Pricing />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "profile",
        children: [
          {
            path: "profile-overview",
            element: <Overview />,
          },
          {
            path: "profile-settings",
            element: <Settings />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            path: "new-user",
            element: <NewUser />,
          },
        ],
      },
      {
        path: "account",
        children: [
          {
            path: "billing",
            element: <Billing />,
          },
          {
            path: "invoice",
            element: <Invoice />,
          },
        ],
      },
      {
        path: "projects",
        children: [
          {
            path: "timeline",
            element: <Timeline />,
          },
        ],
      },
      {
        path: "widgets",
        children: [
          {
            path: "widget-1",
            element: <Widget />,
          },
        ],
      },
      {
        path: "charts",
        children: [
          {
            path: "chart-1",
            element: <Charts />,
          },
        ],
      },
      {
        path: "notification",
        element: <Notifications />,
      },
      {
        path: "applications",
        children: [
          {
            path: "kanban",
            element: <Kanban />,
          },
          {
            path: "wizard",
            element: <Wizard />,
          },
          {
            path: "data-tables",
            element: <DataTables />,
          },
          {
            path: "calendar",
            element: <Calendar />,
          },
        ],
      },
      {
        path: "ecommerce",
        children: [
          {
            path: "products",
            children: [
              {
                path: "new-product",
                element: <NewProduct />,
              },
              {
                path: "edit-product",
                element: <EditProduct />,
              },
              {
                path: "product-page",
                element: <ProductPage />,
              },
            ],
          },
          {
            path: "orders",
            children: [
              {
                path: "order-list",
                element: <OrderLIst />,
              },
              {
                path: "order-details",
                element: <OrderDetails />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "authentication",
    children: [
      {
        path: "sign-in",
        element: <CoverLayout height="full" padding={0} rounded={false} />,
        children: [
          {
            path: "basic",
            element: <SignInBasic />,
          },
        ],
      },
      {
        path: "sign-in-cover",
        element: <CoverLayout height="1/3" padding={4} rounded={true} />,
        children: [
          {
            path: "cover",
            element: <SignInCover />,
          },
        ],
      },
      {
        path: "sign-in-illustration",
        element: <IllustrationLayout />,
        children: [
          {
            path: "illustration",
            element: <SignInIllustration />,
          },
        ],
      },
      {
        path: "sign-up",
        element: <CoverLayout height="1/3" padding={4} rounded={true} />,
        children: [
          {
            path: "cover",
            element: <SignUpCover />,
          },
        ],
      },
      {
        path: "reset-password",
        element: <CoverLayout height="1/3" padding={4} rounded={true} />,
        children: [
          {
            path: "cover",
            element: <ResetCover />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { routes, router };
