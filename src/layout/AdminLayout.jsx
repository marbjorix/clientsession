import { Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"
import AdminNavbar from "./AdminNavbar"

import { LoginContext } from "../context/LoginContext"

const AdminLayout = () => {

  // Hent fra context om en bruger er logget ind
  const { adminUser } = useContext( LoginContext )

  // send til login hvis ikke logget ind
  if ( !adminUser ) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="container-fluid admin-layout p-4" >
      
      <header>
        <AdminNavbar />
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default AdminLayout