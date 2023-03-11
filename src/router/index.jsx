import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layouts/Layout.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx'
import Home from '../views/Home.jsx'
import Login from '../views/Login.jsx'
import Register from '../views/Register.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            }
        ]
    }
])

export default router