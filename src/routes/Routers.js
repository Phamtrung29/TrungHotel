import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import Home from "../pages/Home";
// import About from '../pages/About'
// import Room from '../pages/Room'
// import Services from '../pages/Services'
// import Moment from '../pages/Moment'
// import News from '../pages/News'
// import Contact from '../pages/Contact'
import {
  Home,
  FinalRegister,
  Public,
  ResetPassword,
  Login,
} from "../pages/public";
import Booking from "../pages/public/Booking";
import DetailRoom from "../pages/public/DetailRoom";
import path from "../utils/path";
import SearchPage from "../pages/public/SearchPage";
import Profile from "../pages/private/Profile";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";

const Routers = () => {
  const routes = useRoutes([
    {
      path: `${path.PUBLIC}`,
      element: <Public />,
      children: [
        { element: <Navigate to={`${path.HOME}`} />, index: true },
        {
          path: `${path.HOME}`,
          element: <Home />,
        },
        {
          path: `${path.ROOM}`,
          element: <Home />,
        },
        {
          path: `${path.DETAIL_ROOM}/:idloaiphong`,
          element: <DetailRoom />,
        },
        {
          path: `${path.BOOKING}`,
          element: <Booking />,
        },
        {
          path: `${path.SEARCH}`,
          element: <SearchPage />,
        },
        {
          path: `${path.PROFILE}`,
          element: <Profile />,
        },
        {
          path: `${path.ABOUT}`,
          element: <About />,
        },
        {
          path: `${path.CONTACT}`,
          element: <Contact />,
        },
      ],
    },
    {
      path: `${path.LOGIN}`,
      element: <Login />,
    },
    {
      path: `${path.FINAL_REGISTER}`,
      element: <FinalRegister />,
    },
    {
      path: `${path.RESET_PASSWORD}`,
      element: <ResetPassword />,
    },
  ]);

  return routes;
};

export default Routers;
