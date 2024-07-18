// // const { createBrowserRouter } = require("react-router-dom");
// // const { default: Home } = require("../pages/home/Home");
// // const { default: Login } = require("../pages/logIn/Login");
// // const { default: Details } = require("../pages/details/Details");
// // const { default: SearchResult } = require("../pages/searchResult/SearchResult");
// // const { default: Explore } = require("../pages/explore/Explore");
// // const { default: PageNotFound } = require("../pages/404/PageNotFound");

// import { createBrowserRouter } from "react-router-dom";
// import Login from "../pages/logIn/Login";
// import Home from "../pages/home/Home";
// import SearchResult from "../pages/searchResult/SearchResult";
// import Explore from "../pages/explore/Explore";
// import PageNotFound from "../pages/404/PageNotFound";
// import Details from "../pages/details/Details";

// export const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//     children: [
//       {
//         path: "/:mediaType/:id",
//         element: <Details />,
//       },
//       {
//         path: "/search/:query",
//         element: <SearchResult />,
//       },
//       {
//         path: "/explore/:mediaType",
//         element: <Explore />,
//       },
//       {
//         path: "*",
//         element: <PageNotFound />,
//       },
//     ],
//   },
// ]);
