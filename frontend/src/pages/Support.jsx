import Navbar from "../components/navbar.jsx";
import {useState} from "react";

const Support = ({isDarkMode}) => {
    return (
        <div className={isDarkMode ? "home-page h-screen relative overflow-hidden bg-slate-800 text-white": "home-page h-screen relative overflow-hidden"}>
            <div className={isDarkMode ? "content container mx-auto px-4 md:px-20 grid gap-8 mt-3 grid-cols-1 bg-slate-800 text-white md:grid-cols-5 h-full relative w-full" : "content container mx-auto px-4 md:px-20 bg-white text-black grid gap-8 mt-3 grid-cols-1 md:grid-cols-5 h-full relative w-full"}>
                <div className="image col-span-2">
                    <img className="rounded" src="https://images.pexels.com/photos/5453811/pexels-photo-5453811.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                </div>
                <div className="content col-span-3">
                    <h1 className="text-xl font-bold border-b-2 border-b-secondary pb-2 mb-4">Send us a message, We will get back to you ASAP!</h1>
                    <div className="support-form">

                        <form>
                            <div className="mb-6">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium">Your
                                    name</label>
                                <input type="text" id="name"
                                       className={isDarkMode ? "block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg" : "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"}
                                       placeholder="John Doe" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium">Your
                                    email</label>
                                <input type="email" id="email"
                                       className={isDarkMode ? "block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg" : "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"}
                                       placeholder="name@flowbite.com" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message"
                                       className="block mb-2 text-sm font-medium">Your
                                    message</label>
                                <textarea id="message" rows="4"
                                          className={isDarkMode ? "block p-2.5 w-full text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" : "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"}
                                          placeholder="Leave a comment..."></textarea>
                            </div>

                            <button type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support