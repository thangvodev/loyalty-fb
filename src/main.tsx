/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { App as AntdApp, ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { App, Box, SnackbarProvider } from "zmp-ui";

import { getBasePath } from "./presentation/utils/zma";

import { validateMessages } from "./presentation/constants/validate-messages";

import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
//change to vietnamese
dayjs.locale("vi");
//add plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

import { AppProvider } from "./presentation/context/AppContext";
import HomePage from "./presentation/pages/HomePage";
import OrderPage from "./presentation/pages/OrderPage";
import NotificationPage from "./presentation/pages/NotificationPage";
import AccountPage from "./presentation/pages/AccountPage";
import QRPage from "./presentation/pages/QRPage";
import NewsDetailsPage from "./presentation/pages/NewsDetailsPage";
import NewsPage from "./presentation/pages/NewsPage";
import CartPage from "./presentation/pages/CartPage";
import UserDeliveryDetailsPage from "./presentation/pages/UserDeliveryDetailsPage";
import OrderSuccessPage from "./presentation/pages/OrderSuccessPage";
import SelectRestaurantPage from "./presentation/pages/SelectRestaurantPage";
import TableBookingPage from "./presentation/pages/TableBookingPage";
import TableBookingDetailsPage from "./presentation/pages/TableBookingDetailsPage";
import TableBookingSuccessPage from "./presentation/pages/TableBookingSuccessPage";
import OrderTakeoutPage from "./presentation/pages/OrderTakeoutPage";
import CartTakeoutPage from "./presentation/pages/CartTakeoutPage";
import ProfilePage from "./presentation/pages/ProfilePage";
import OrderHistoryPage from "./presentation/pages/OrderHistoryPage";
import OrderDetailsPage from "./presentation/pages/OrderDetailsPage";
import PointsPage from "./presentation/pages/PointsPage";
import PointsRedeemPage from "./presentation/pages/PointsRedeemPage";
import RewardDetailsPage from "./presentation/pages/RewardDetailsPage";
import MemberCardsPage from "./presentation/pages/MemberCardsPage";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
        <ToastContainer style={{ marginTop: "48px" }} />
      </Box>
    </Box>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
        {
          path: "order/:orderId",
          element: <OrderDetailsPage />,
        },
        {
          path: "order-success",
          element: <OrderSuccessPage />,
        },
        {
          path: "order-takeout",
          element: <OrderTakeoutPage />,
        },
        {
          path: "order-history",
          element: <OrderHistoryPage />,
        },
        {
          path: "notification",
          element: <NotificationPage />,
        },
        {
          path: "account",
          element: <AccountPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "qr",
          element: <QRPage />,
        },
        {
          path: "news",
          element: <NewsPage />,
        },
        {
          path: "news/:newId",
          element: <NewsDetailsPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "cart-takeout",
          element: <CartTakeoutPage />,
        },
        {
          path: "user-delivery-details",
          element: <UserDeliveryDetailsPage />,
        },
        {
          path: "select-restaurant",
          element: <SelectRestaurantPage />,
        },
        {
          path: "table-booking",
          element: <TableBookingPage />,
        },
        {
          path: "table-booking-details",
          element: <TableBookingDetailsPage />,
        },
        {
          path: "table-booking-success",
          element: <TableBookingSuccessPage />,
        },
        {
          path: "points",
          element: <PointsPage />,
        },
        {
          path: "points-redeem",
          element: <PointsRedeemPage />,
        },
        {
          path: "rewards/:rewardId",
          element: <RewardDetailsPage />,
        },
        {
          path: "member-cards",
          element: <MemberCardsPage />,
        },
      ],
    },
  ],
  { basename: getBasePath() },
);

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#4884FF",
              fontFamily:
                "Manrope, 'Inter',-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
            },
          }}
          form={{ validateMessages }}
          locale={viVN}
        >
          <AntdApp>
            <SnackbarProvider>
              <AppProvider>
                <RouterProvider router={router} />
              </AppProvider>
            </SnackbarProvider>
          </AntdApp>
        </ConfigProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
