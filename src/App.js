const React = require('react')
const ReactDOM = require('react-dom/client')
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import About from './component/About'
import Error from './component/Error'
import Contact from './component/Contact'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

 /*
 Header
  - Navbar
      - logo
      - About us
      - help 
      - Cart
 Body
    -Restaraunt list
      -Restaraunt Card
        -Image
        -Name
        -cusine
        -star
 Footer
 */

const AppLayout = () => (
<div>
  <Header></Header>
  <Outlet></Outlet>
</div>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      }, 
    ,{
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },],
    errorElement: <Error />
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)
