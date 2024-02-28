import{createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import SignUp from './Pages/signup.jsx'
import Login from './Pages/Login.jsx'
import Root from "./Pages/root.jsx"
import Contact from "./Pages/contact.jsx"
import Blog from "./Pages/blog.jsx"
import Check from "./Pages/check.jsx"
import Note from "./Pages/note.jsx"
import Dashbord from './Pages/dashbord.jsx'
import Setting from './Pages/setting.jsx'
import Sales from './Pages/sales.jsx'
import Menu from './Pages/menu.jsx'

import Pay from './Cart/pay.jsx'
import Pinfo from './Cart/pinfo.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route  index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='check' element={<Check/>}/>
      <Route path='note' element={<Note/>}/>
      <Route path='dashbord' element={<Dashbord/>}/>
      <Route path='setting' element={<Setting/>}/>
      <Route path='sales' element={<Sales/>}/>
      <Route path='pay' element={<Pay/>}/>
      <Route path='pinfo' element={<Pinfo/>}/>
      <Route path='menu' element={<Menu/>}/>
    </Route>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
