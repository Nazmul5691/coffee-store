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
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
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
        loader: () => fetch('http://localhost:5000/users'),
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





// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     loader: () => fetch('http://localhost:5000/coffee')
//   },
//   {
//     path: "addCoffee",
//     element: <AddCoffee />
//   },
//   {
//     path: "/updateCoffee/:id",
//     element: <UpdateCoffee />,
//     loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
//   },
// ]);