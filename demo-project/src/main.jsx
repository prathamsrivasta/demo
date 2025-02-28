import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignInPage from './auth/sign-in'
import {createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home/index.jsx'


const router= createBrowserRouter([
  {
    element:<App/>,
    children:[
    // {

    //   path:'/dashboard',
    //   element:<Dashboard/>

    // }

    {
      path:'/',
      element:<Home/>
    },
  
  ]
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/> 
</StrictMode>,
)
