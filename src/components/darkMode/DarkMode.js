import React, { useEffect, useState } from 'react';
import './DarkMode.css';

function DarkMode(props) {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {

        if (localStorage.getItem("theme") == "true") {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {

        localStorage.setItem("theme", darkMode)
    }, [darkMode])

    const toggleTheme = () => {

        setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode && "dark"}>
            {props.children}
            <div className="bg-gray-800 mx-auto fixed bottom-0 inset-x-0 container z-10 flex items-center justify-around h-12">
                <span className="text-white text-sm">© Copyright 2021_
            <a href="https://dribbble.com/shots/14911512-Credit-Card-Landing-page" target="_blank">
                        Ashik
            </a>
                </span>
                <label class="switch">
                    <input type="checkbox" onChange={toggleTheme} checked={darkMode && true} />
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default DarkMode;
