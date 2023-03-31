import logo from '../assets/images/logo-black2.svg'
import whiteLogo from '../assets/images/logo-white.svg'
import {Link, NavLink, useNavigate} from "react-router-dom";
import SearchModal from "./models/SearchModal.jsx";
import axios from "axios";
import config from "../helpers/config.js";
import getCookie from "../helpers/cookie.js";
import {useEffect} from "react";
import jwtDecode from "jwt-decode";

const Navbar = ({ isDarkMode, onToggle, setUser, user }) => {
    const navigate = useNavigate()
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const token = getCookie("ACCESS_TOKEN")
    const logOut = async () => {
        await axios.post(`${API_BASE_URL}/api/logout`, '', config())
            .then(({data}) => {
                const date = new Date();
                date.setTime(date.getTime() + (60*60*1000));
                let expires = "expires=" + date.toUTCString();
                document.cookie = `ACCESS_TOKEN=;${expires};path=/`
                navigate('/login')
            }).catch((error) => {
                console.log(error)
            })
    }
    const fetchUserData = async () => {
        if(token){
            const decodedToken = jwtDecode(token)
            await axios.get(`${API_BASE_URL}/api/user/${decodedToken.sub}`, config())
                .then(({data}) => {
                    setUser(data)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <div className="container mx-auto px-4 md:px-20 sticky z-10">
            
            <nav className={isDarkMode ? "bg-slate-800 border-gray-700 border mt-4 px-2 sm:px-4 rounded" : "bg-white border mt-4 px-2 sm:px-4 rounded"}>
                <div className="container flex flex-wrap items-center justify-between mx-auto px-8">
                    <div className="logo-searchbar flex gap-8 items-center justify-center">
                        <Link to="/" className="flex items-center">
                            <img src={isDarkMode ? whiteLogo : logo} className="h-13 mr-3" alt="Flowbite Logo" />
                        </Link>
                        {token && <SearchModal isDarkMode={isDarkMode} />}
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:flex items-center gap-5 md:w-auto" id="navbar-default">
                        <ul className={isDarkMode ? "flex flex-col gap-4 p-4 mt-4 border border-slate-800 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-800 text-white" : "flex flex-col gap-4 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"}>
                            <li>
                                <NavLink to="/" className="flex flex-col m-0 items-center justify-center py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
                                    <i className='bx bx-home-alt-2 text-2xl'></i>
                                    <span className="text-xs m-0 p-0">Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="flex flex-col m-0 items-center justify-center py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <i className='bx bx-message-square-detail text-2xl'></i>
                                    <span className="text-xs">About</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/support" className="flex flex-col m-0 items-center justify-center py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <i className='bx bx-support text-2xl'></i>
                                    <span className="text-xs">Support</span>
                                </NavLink>
                            </li>
                        </ul>
                        {token && <div>
                            <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full border-2 border-secondary" src={user && `http://127.0.0.1:8000/storage/usersImages/${user.image}`} alt="user photo" />
                            </button>

                            <div id="dropdownAvatar" className={isDarkMode ? "z-10 hidden divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600" : "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"}>
                                <div className={isDarkMode ? "px-4 py-3 text-sm text-white" : "px-4 py-3 text-sm text-gray-900"}>
                                    <div>{user && user.name}</div>
                                    <div className="font-medium truncate">{user && user.name}</div>
                                </div>
                                <ul className={isDarkMode ? "py-2 text-sm text-gray-200" : "py-2 text-sm text-gray-700 dark:text-gray-200"} aria-labelledby="dropdownUserAvatarButton">
                                    <li>
                                        <Link to="/profile" className={isDarkMode ? "block px-4 py-2 hover:bg-gray-600 hover:text-white" : "block px-4 py-2 hover:bg-gray-100"}>Profile</Link>
                                    </li>
                                    <li>
                                        <a href="#" className={isDarkMode ? "block px-4 py-2 hover:bg-gray-600 hover:text-white" : "block px-4 py-2 hover:bg-gray-100"}>Settings</a>
                                    </li>
                                    <li>
                                        <p onClick={logOut} className={isDarkMode ? "block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer" : "block px-4 py-2 hover:bg-gray-100 cursor-pointer"}>Log Out</p>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                        <div className="dark-light">
                            <button className="theme ml-3" onClick={onToggle}>
                                {isDarkMode ? <i className="bx bx-sun text-lg transition"></i> : <i className="bx bx-moon text-lg transition"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar