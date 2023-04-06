import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import OrderReview from './component/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
     {
       path:'/',
       element:<Home></Home>,
       loader:() =>fetch('tshirt.json')
    },
    {
      path:'/review',
      element:<OrderReview></OrderReview>
    },
    {
      path:'/about',
      element:<div>about</div>
    },
    {
      path: '/contact',
      element:<div>contact</div>

    }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
