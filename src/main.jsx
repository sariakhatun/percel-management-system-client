import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router";
import { router } from './assets/router.jsx';
import AuthProvider from './assets/Context/AuthContext/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='bg-slate-200'>
    <div className='urbanist max-w-7xl mx-auto '>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
   </div>
   </div>
  </StrictMode>,
)
