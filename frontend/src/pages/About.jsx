import {useState} from "react";
import Navbar from "../components/navbar.jsx";

const About = () => {
    const [ isDarkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('mode')))
    const [ user, setUser ] = useState(null)
    const handleDarkMode = () => {
        setDarkMode(!isDarkMode)
        localStorage.setItem('mode', JSON.stringify(!isDarkMode))
    }
    return (
        <div className={isDarkMode ? "home-page h-screen relative overflow-hidden bg-slate-800 text-white": "home-page h-screen relative overflow-hidden"}>
            <Navbar isDarkMode={isDarkMode} onToggle={handleDarkMode} setUser={setUser} user={user}/>
            <div className="content container mx-auto px-4 md:px-20 grid gap-8 mt-3 grid-cols-1 md:grid-cols-4 h-full relative w-full">
                About us
            </div>
        </div>
    )
}

export default About