import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Login/Register";
import Coverage from "../Pages/Coverage/Coverage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index: true,
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/coverage',
        element:<Coverage></Coverage>,
        loader: ()=>fetch('./serviceCenter.json')
      },
    ]
  },
  {
    path:'/',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      
    ]
  }
]);