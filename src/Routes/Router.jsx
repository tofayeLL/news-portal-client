import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/Root";
import AllNews from "../pages/AllNews/AllNews";
import ErrorPage from "../components/ErrorPage/ErrorPage";







export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,   
      children:[
       {
        path:"/",
        element:<Home></Home>
       },
       {
        path:"/all-news",
        element:<AllNews></AllNews>
       },
       
      ],
      
    },
  ]);




  