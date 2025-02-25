import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import UpdateCoffeePage from './components/UpdateCoffeePage.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffeePage",
        element: <UpdateCoffeePage />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`https://coffee-store-server-blush-alpha.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) => fetch(`https://coffee-store-server-blush-alpha.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('https://coffee-store-server-blush-alpha.vercel.app/users'),
      }
    ]
  },

]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
    </AuthProvider>
  </StrictMode>,
)

