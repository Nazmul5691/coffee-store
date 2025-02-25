

import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-400 px-5 md:px-10 lg:px-20 py-2 text-white">
            <div className="scale-100 cursor-pointer rounded-2xl pr-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2 className='text-blue-800 font-rancho text-3xl font-bold'>Espresso Emporium</h2>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-white font-bold underline" : "text-black"}>
                    Home
                </NavLink>

                <NavLink
                    to="/addCoffee"
                    className={({ isActive }) => isActive ? "text-white font-bold underline" : "text-black"}>
                    Add Coffee
                </NavLink>

                <NavLink
                    to="/updateCoffeePage"
                    className={({ isActive }) => isActive ? "text-white font-bold underline" : "text-black"}>
                    Update Coffee
                </NavLink>

                <NavLink
                    to="/users"
                    className={({ isActive }) => isActive ? "text-white font-bold underline" : "text-black"}>
                    Users
                </NavLink>

                <NavLink
                    to="/signin"
                    className={({ isActive }) => isActive ? "text-white font-bold underline" : "text-black"}>
                    Sign In
                </NavLink>

                {/* <NavLink
                    to="/signUp"
                    className={({ isActive }) => isActive ? "text-white font-bold underline" : "text-black"}>
                    Sign Up
                </NavLink> */}

            </ul>

            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                {dropDownState && (
                    <ul className="z-10 p-5  gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-white"}>
                            Home
                        </NavLink>

                        <NavLink
                            to="/addCoffee"
                            className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-white"}>
                            Add Coffee
                        </NavLink>

                        <NavLink
                            to="/updateCoffeePage"
                            className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-white"}>
                            Update Coffee
                        </NavLink>

                        <NavLink
                            to="/users"
                            className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-white"}>
                            Users
                        </NavLink>

                        <NavLink
                            to="/signin"
                            className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-white"}>
                            Sign In
                        </NavLink>

                        {/* <NavLink
                            to="/signUp"
                            className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-black"}>
                            Sign Up
                        </NavLink> */}

                    </ul>
                )}
            </div>
        </nav>
    );
};




