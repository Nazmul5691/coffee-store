import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            
            <nav className="flex gap-10">

                <NavLink
                    to="/"
                    className={({ isActive }) =>isActive ? "text-blue-700 font-bold underline" : "text-black"}>
                    Home
                </NavLink>

                <NavLink
                    to="/addCoffee"
                    className={({ isActive }) =>isActive ? "text-blue-700 font-bold underline" : "text-black"}>
                    Add Coffee
                </NavLink>

                <NavLink
                    to="/updateCoffeePage"
                    className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-black"}>
                    Update Coffee
                </NavLink>

                <NavLink
                    to="/signin"
                    className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-black"}>
                    Sign In
                </NavLink>

                <NavLink
                    to="/signUp"
                    className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-black"}>
                    Sign Up
                </NavLink>


                <NavLink
                    to="/users"
                    className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-black"}>
                    Users
                </NavLink>

              


                {/* <NavLink to="/">Home</NavLink> */}
                {/* <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-black"} >
                    About
                </NavLink> */}



                {/* <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact Us</NavLink> */}
            </nav>
        </div>
    )
}