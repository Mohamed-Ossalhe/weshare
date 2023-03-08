import {useEffect, useState} from "react"
import {Link} from "react-router-dom";

const Post = ({ isDarkMode, date, title, body }) => {
    const [ toggle, setToggle ] = useState(false)
    const [elapsedTime, setElapsedTime] = useState('')
    const [ dropDown, setDropdown] = useState(false)

    useEffect(() => {
        // Update the elapsed time every minute
        const intervalId = setInterval(() => {
            // Get the current date and time
            const now = new Date();

            // Post Date
            //const postDate = new Date(date)

            // Calculate the difference in milliseconds between the current date/time and the post date/time
            const timeDiff = now.getTime() - date.getTime();

            // Convert the time difference to seconds, minutes, hours, days, etc. as needed
            const secondsDiff = Math.floor(timeDiff / 1000);
            const minutesDiff = Math.floor(timeDiff / 1000 / 60);
            const hoursDiff = Math.floor(timeDiff / 1000 / 60 / 60);
            const daysDiff = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

            // Choose the appropriate time unit to display
            let unit = '';
            let value = 0;
            if (daysDiff > 0) {
                unit = 'day';
                value = daysDiff;
            } else if (hoursDiff > 0) {
                unit = 'hour';
                value = hoursDiff;
            } else if (minutesDiff > 0) {
                unit = 'minute';
                value = minutesDiff;
            } else {
                unit = 'second';
                value = secondsDiff;
            }

            // Add "s" to the end of the unit if the value is not 1
            if (value !== 1) {
                unit += 's';
            }
            // Update the elapsed time state variable with the new value
            setElapsedTime(`${value} ${unit} ago`);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="w-full">
            <div href="#" className={isDarkMode ? "flex flex-col items-center bg-slate-800 border  px-2 border-gray-700 rounded-lg shadow md:max-w-xl hover:bg-slate-900" : "flex flex-col items-center bg-white border  px-2 border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100"}>
                <header className="w-full flex items-center justify-between px-2 py-2">
                    <div className="post-profile flex items-center gap-2">
                        <img className="w-12 h-12 rounded-full shadow-lg border-2 border-secondary" src="https://randomuser.me/api/portraits/men/63.jpg" alt="Bonnie image"/>
                        <div className="profile-name flex flex-col">
                            Username
                            <span className="text-sm">{elapsedTime}</span>
                        </div>
                    </div>
                    <div className="post-menu relative">
                        <button id="show-post-dropdown" onClick={() => setDropdown(!dropDown)} className="text-xl p-2"><i className='bx bx-dots-horizontal-rounded'></i></button>
                        <div id="post-dropdown" className={dropDown ? "absolute right-0 p-2 bg-secondary text-white rounded" : "absolute hidden right-0 p-2 bg-secondary text-white rounded"}>
                            <ul className="">
                                <li className="pr-20"><a href="#">Edit</a></li>
                                <li className="pr-20"><a href="#">Share</a></li>
                                <li className="pr-20"><a href="#">View</a></li>
                                <li className="pr-20"><a href="#">Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <img className="object-cover w-full h-96 md:h-60 rounded-t-lg" src="https://via.placeholder.com/300" alt="" />
                <div className="flex flex-col justify-between w-full p-4 leading-normal">
                    <h5 className={isDarkMode ? "mb-2 text-lg font-bold tracking-tight text-white" : "mb-2 text-lg font-bold tracking-tight text-gray-900"}>{title}</h5>
                    <p className={isDarkMode ? "mb-2 font-normal text-gray-400" : "mb-2 font-normal text-gray-700"}>{body}</p>
                    <Link to={"/post/" + title}>Read More...</Link>
                </div>
                <div className="post-info w-full flex items-center justify-end px-5">
                    <div className="info-wrapper flex items-center gap-4">
                        <button className="likes flex items-center gap-1 cursor-pointer" onClick={() => setToggle(!toggle)}>
                            <i className={toggle ? ('bx bx-like text-secondary text-2xl'): (isDarkMode ? 'bx bx-like text-white text-2xl' : 'bx bx-like text-black text-2xl')}></i>
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