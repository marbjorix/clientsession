import { NavLink } from "react-router-dom"
import Logout from "../components/Logout"

const AdminNavbar = () => {
    return (

        <nav>
            <ul>
                <li><NavLink to="/admin">ADMINHome</NavLink></li>
                <li><NavLink to="productsadmin">Products ADMIN</NavLink></li>
                <li><NavLink to="productscreate">Products create</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><Logout /></li>
            </ul>
        </nav>

    )
}

export default AdminNavbar

