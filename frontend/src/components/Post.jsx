import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import UpdatePostModel from "./models/updatePostModel.jsx";
import Like from "./Like.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper";
import DropDownMenu from "./DropDownMenu.jsx";
import getCookie from "../helpers/cookie.js";
import jwtDecode from "jwt-decode";

const Post = ({ isDarkMode, id, date, title, body, images, likes, comments, reGetData, user }) => {
    const token = getCookie('ACCESS_TOKEN');
    let authUserId = '';
    if(token) {
        const decodedToken = jwtDecode(token)
        authUserId = parseInt(decodedToken.sub)
    }
    const [elapsedTime, setElapsedTime] = useState('')
    // show update modal
    const [ PostModel, setPostModel ] = useState(false)

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
                unit = 'Just now';
                value = '';
            }

            // Add "s" to the end of the unit if the value is not 1
            if (value !== 1 && value !== '') {
                unit += 's';
            }
            // Add "ago" to the end of the unit if the value not " "
            if(value !== '') {
                unit += ' ago'
            }
            // Update the elapsed time state variable with the new value
            setElapsedTime(`${value} ${unit}`);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="w-full post" id={id}>
            <div href="#" className={isDarkMode ? "flex flex-col items-center bg-slate-800 border  px-2 border-gray-700 rounded-lg shadow md:max-w-xl hover:bg-slate-900" : "flex flex-col items-center bg-white border  px-2 border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100"}>
                <header className="w-full flex items-center justify-between px-2 py-2">
                    <div className="post-profile flex items-center gap-2">
                        <img className="w-12 h-12 rounded-full shadow-lg border-2 border-secondary" src={user && `http://127.0.0.1:8000/storage/usersImages/${user.image}`} alt="Bonnie image"/>
                        <div className="profile-name flex flex-col">
                            {user && user.name}
                            <span className="text-sm">{elapsedTime}</span>
                        </div>
                    </div>
                    { authUserId === user.id ? <DropDownMenu setPostModel={setPostModel} /> : '' }
                </header>

                <Swiper pagination={{dynamicBullets: true}} autoplay={true} speed={2500} loop={true} modules={[Pagination, Autoplay]} className="mySwiper w-full">
                    {images && images.map((image) => {
                        return <SwiperSlide key={image.id}><img className="object-cover w-full h-96 md:h-60 rounded-t-lg" alt="post image" src={`http://127.0.0.1:8000/storage/postImages/${image.content}`}/></SwiperSlide>
                    })}
                </Swiper>

                {/*<img className="object-cover w-full h-96 md:h-60 rounded-t-lg" src="https://via.placeholder.com/300" alt="" />*/}
                <div className="flex flex-col justify-between w-full p-4 leading-normal">
                    <h5 className={isDarkMode ? "mb-2 text-lg font-bold tracking-tight text-white" : "mb-2 text-lg font-bold tracking-tight text-gray-900"}>{title}</h5>
                    <p className={isDarkMode ? "mb-2 font-normal text-gray-400 truncate" : "mb-2 font-normal text-gray-700 truncate"}>{body}</p>
                    <Link to={`/post/${title}`} className="w-fit">Read More...</Link>
                </div>
                <div className="post-info w-full flex items-center justify-end px-5">
                    <div className="info-wrapper flex items-center gap-4">
                        <Like isDarkMode={isDarkMode} reGetData={reGetData} likes={likes} postId={id}/>
                        <Link to={`/post/${title}`}>
                            <button className="comments flex items-center gap-1 cursor-pointer">
                                <i className='bx bx-comment text-2xl'></i>
                                <p>{comments.length}</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {PostModel && <UpdatePostModel fire={PostModel} setFire={setPostModel} isDarkMode={isDarkMode} postId={id} title={title} userId={authUserId} />}
        </div>
    )
}

export default Post