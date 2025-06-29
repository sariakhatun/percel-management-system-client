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
import PrivateRoute from "../routes/PrivateRoute";
import SendParcel from "../Pages/SendPercel/SendParcel";
import About from "../Pages/About/About";
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
        path:'/about',
        element:<About></About>,
       
      },
      {
        path:'/coverage',
        element:<Coverage></Coverage>,
        loader: ()=>fetch('./serviceCenter.json')
      },
      {
        path:'/sendParcel',
        element:<PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
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