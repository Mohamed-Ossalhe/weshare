import Navbar from "../components/navbar.jsx";
import {useState} from "react";

const Support = () => {
    const [ isDarkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('mode')))
    const handleDarkMode = () => {
        setDarkMode(!isDarkMode)
        localStorage.setItem('mode', JSON.stringify(!isDarkMode))
    }
    return (
        <div className={isDarkMode ? "home-page h-screen relative overflow-hidden bg-slate-800 text-white": "home-page h-screen relative overflow-hidden"}>
            <Navbar isDarkMode={isDarkMode} onToggle={handleDarkMode}/>
            <div className="content container mx-auto px-4 md:px-20 grid gap-8 mt-3 grid-cols-1 md:grid-cols-4 h-full relative w-full">
                Support
            </div>
        </div>
    )
}

export default Support