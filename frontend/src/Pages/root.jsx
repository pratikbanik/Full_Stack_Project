import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function root() {
  return (
    <>
    
        <Sidebar/>
     
        <Header/>
        <hr/>
        <main>
        <Outlet/>
        </main>
        <hr/>
        <Footer/>
    </>
  )
}

export default root
