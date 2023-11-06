import React from 'react'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration,
} from 'react-router-dom'
import Header from './cmmon/header'
import Home from './pages/home'
import Footer from './cmmon/footer'
import Cart from './pages/cart'
import { productsData } from './api/api'
import Products from './components/products'
import Login from './pages/Login'
import Signup from './pages/Signup'

const Layout = () => {
    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: productsData,
            },
            {
                path: '/products/:id',
                element: <Products />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/signup',
                element:<Signup/>,
            },
        ],
    },
])

function App() {
    return (
        <div className="font-bodyFont">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
