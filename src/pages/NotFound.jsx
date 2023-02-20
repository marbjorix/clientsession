import { NavLink } from "react-router-dom"

export default function NotFound () {
    return (
        <div>
            <h2>Sorry - page not found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat, earum aliquam quisquam ad quam vel adipisci vitae odit id.</p>
            <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
        </div>
    )
}