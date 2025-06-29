import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router";
import { router } from './assets/router.jsx';
import AuthProvider from './assets/Context/AuthContext/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='bg-slate-200'>
    <div className='urbanist max-w-7xl mx-auto '>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
   </div>
   </div>
  </StrictMode>,
)
