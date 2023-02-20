import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


const DefaultLayout = () => {
    return (
        <div className="container-fluid  bg-light p-4 default-layout">

            <header>
                <Navbar />
            </header>
            
            <main>
                <Outlet />
            </main>
        
        </div>
    )
}

export default DefaultLayout