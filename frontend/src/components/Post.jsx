import { useState } from "react"

const Post = () => {
    const [ toggle, setToggle ] = useState(false)
    return (
        <div className="w-full">
            <div href="#" className="flex flex-col items-center bg-white border  px-2 border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <header className="w-full flex items-center justify-between px-2 py-2">
                    <div className="post-profile flex items-center gap-2">
                        <img className="w-12 h-12 rounded-full shadow-lg border-2 border-secondary" src="https://randomuser.me/api/portraits/men/63.jpg" alt="Bonnie image"/>
                        <div className="profile-name flex flex-col">
                            Username
                            <span className="text-sm">@username</span>
                        </div>
                    </div>
                    <div className="post-menu">
                            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            </button>
                            <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </header>
                <img className="object-cover w-full h-96 md:h-60 rounded-t-lg" src="https://via.placeholder.com/300" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order...</p>
                    <span>Read More...</span>
                </div>
                <div className="post-info w-full flex items-center justify-end px-5">
                    <div className="info-wrapper flex items-center gap-4">
                        <button className="likes flex items-center gap-1 cursor-pointer" onClick={() => setToggle(!toggle)}>
                            <i className={toggle ? ('bx bx-like text-secondary text-2xl'): ('bx bx-like text-black text-2xl')}></i>
                            <p>200</p>
                        </button>
                        <button className="comments flex items-center gap-1 cursor-pointer">
                            <i className='bx bx-comment text-2xl'></i>
                            <p>200</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post