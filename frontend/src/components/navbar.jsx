import logo from '../assets/images/logo-black2.svg'
import whiteLogo from '../assets/images/logo-white.svg'

const Navbar = ({ isDarkMode, onToggle }) => {
    return (
        <div className="container mx-auto px-4 md:px-20 sticky z-10">
            
            <nav className={isDarkMode ? "bg-slate-800 border-gray-700 border mt-4 px-2 sm:px-4 py-2.5 rounded" : "bg-white border mt-4 px-2 sm:px-4 py-2.5 rounded"}>
                <div className="container flex flex-wrap items-center justify-between mx-auto px-8">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={isDarkMode ? whiteLogo : logo} className="h-12 mr-3" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:flex items-center gap-5 md:w-auto" id="navbar-default">
                        <ul className={isDarkMode ? "flex flex-col p-4 mt-4 border border-slate-800 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-800 text-white" : "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"}>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Support</a>
                            </li>
                        </ul>
                        <div>
                            <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full border-2 border-secondary" src="https://randomuser.me/api/portraits/men/63.jpg" alt="user photo" />
                            </button>

                            <div id="dropdownAvatar" className={isDarkMode ? "z-10 hidden divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600" : "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"}>
                                <div className={isDarkMode ? "px-4 py-3 text-sm text-white" : "px-4 py-3 text-sm text-gray-900"}>
                                    <div>Bonnie Green</div>
                                    <div className="font-medium truncate">name@flowbite.com</div>
                                </div>
                                <ul className={isDarkMode ? "py-2 text-sm text-gray-200" : "py-2 text-sm text-gray-700 dark:text-gray-200"} aria-labelledby="dropdownUserAvatarButton">
                                    <li>
                                        <a href="#" className={isDarkMode ? "block px-4 py-2 hover:bg-gray-600 hover:text-white" : "block px-4 py-2 hover:bg-gray-100"}>Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className={isDarkMode ? "block px-4 py-2 hover:bg-gray-600 hover:text-white" : "block px-4 py-2 hover:bg-gray-100"}>Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className={isDarkMode ? "block px-4 py-2 hover:bg-gray-600 hover:text-white" : "block px-4 py-2 hover:bg-gray-100"}>Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-2">
                                    <a href="#" className={isDarkMode ? "block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white" : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}>Sign out</a>
                                </div>
                            </div>
                        </div>
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