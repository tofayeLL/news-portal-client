import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/Root";
import AllNews from "../pages/AllNews/AllNews";







export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
       {
        path:"/",
        element:<Home></Home>
       },
       {
        path:"/all-news",
        element:<AllNews></AllNews>
       },
       
      ]
    },
  ]);




  