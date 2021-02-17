import React, { useState } from 'react';
import logo from '../assets/img/logo.png';

function Menu() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className={toggleMenu ? "z-50 flex flex-col items-center fixed top-0 inset-x-0 h-screen bg-white dark:color-invert sm:bg-transparent sm:flex-row sm:justify-between sm:static sm:h-20 sm:px-3" : "z-50 flex flex-col items-center fixed top-0 inset-x-0 bg-white dark:color-invert sm:bg-transparent sm:flex-row sm:justify-between sm:static sm:h-20 sm:px-3"}>
            <img onClick={() => setToggleMenu(!toggleMenu)} className="h-8 my-5 cursor-pointer sm:my-0 sm:cursor-default" src={logo} />
            <div className={toggleMenu ? "flex flex-col items-center justify-around h-full mb-10 text-black sm:flex sm:flex-row sm:items-center sm:justify-end sm:w-full sm:mb-0" : "hidden sm:flex sm:flex-row sm:items-center sm:justify-end sm:w-full"}>
                <span className="cursor-pointer sm:ml-2 md:ml-10">Twinkles</span>
                <span className="cursor-pointer sm:mx-5">Features</span>
                <span className="cursor-pointer sm:mr-auto">Pricing</span>
                <div className="flex items-center sm:mx-2 md:mx-10">
                    <span className="cursor-pointer">Personal</span>
                    <span className="font-black mx-4 pb-1.5 cursor-default sm:mx-1">.</span>
                    <span className="cursor-pointer">Business</span>
                </div>
                <button className="border rounded-lg border-black h-10 px-5 cursor-pointer focus:outline-none sm:text-xs md:text-base sm:h-8 sm:px-4">Get App</button>
            </div>
        </nav>
    )
}

export default Menu;
