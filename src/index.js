import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home';
// import About from './Component/About';
import ContactUs from './Component/Contactus';
import Services from './Component/Services';
import Product1 from './Component/Product1';
import Nav from './Component/Nav';
import Error from './Component/Error';
import Productdetail from './Component/Productdetail';
import ThemeProvider from './Context/ThemeContext';


const About = React.lazy(()=>import('./Component/About'))//it loads only when you click

const router = createBrowserRouter([
    {
        path:'/',
        element:<Nav/>,
        children:[
    {
        path: '/home',
        element:<Home/>
    },
    {
        path: '/about',
        element:
        <React.Suspense>
        <About/>
        </React.Suspense>
    },
    {
        path: '/contact',
        element:<ContactUs/>
    },
    {
        path: '/services',
        element:<Services/>
    },
    {
        path: '/product',
        element:<Product1/>
    },
    {
        path: '/product/:id',
        element:<Productdetail/>
    },
    {
        path:'*',
        element:<Error/>
    },
        ]
    }
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
        </ThemeProvider>
  
  
 );


reportWebVitals();
