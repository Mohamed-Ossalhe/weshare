import logo from '../assets/images/logo-black2.svg'
import logoWhite from '../assets/images/logo-white.svg'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="login-page h-screen relative overflow-hidden font-montserrat">
            <div className="content container mx-auto pr-4 md:pr-20 grid gap-8 grid-cols-1 md:grid-cols-4 h-full relative w-full">
                <div className="intro-text col-span-2 md:bg-log-in md:bg-cover hidden md:block">
                    <div className="intor-wrapper md:flex px-12 pb-8 h-full w-full bg-gray-500/25 md:flex-col md:items-start md:justify-end">
                        <img src={logoWhite} alt="weshare" className='h-32 mb-5' />
                        <h1 className='text-white text-2xl'>Open and Share Your Thougths to the World.</h1>
                    </div>
                </div>
                <div className="form-wrapper md:col-span-2 flex flex-col justify-center gap-4 pl-8">
                    <h2 className='flex items-center flex-col md:flex-row'>Welcome to <span><img src={logo} alt="weshare" className='w-22 mx-5 my-5 md:my-0' /></span>Share Your Thoughts, Get Inspired.</h2>
                    <form className="w-full" method="POST" encType="multipart/form-data">
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                    <p>New to WESHARE, Create Account? <Link className='text-blue-500' to={"/sign-up"}>SignUp.</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage