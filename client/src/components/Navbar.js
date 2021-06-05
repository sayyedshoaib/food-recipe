import React, { useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { UserContext}  from '../App'


const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    console.log(dispatch)

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/">Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/About">About</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/Contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/Logout">Logout</NavLink>
                    </li>

                </>
            )
        }else{
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/">Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/About">About</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/Contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/Signup">Registration</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav_links" to="/Login">Login</NavLink>
                    </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <NavLink className="navbar-brand" to="/">Food Recipe</NavLink>
                <ul className="navbar-nav ml-auto nav_items">
                    <RenderMenu />

                </ul>
            </nav>
        </>
    )
}

export default Navbar;
