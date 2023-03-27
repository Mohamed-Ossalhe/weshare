import Like from "./Like.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import config from "../helpers/config.js";
import timeCalculator from "../helpers/timeCalculator.js";
import getCookie from "../helpers/cookie.js";
import jwtDecode from "jwt-decode";
import DropDownMenu from "./DropDownMenu.jsx";

const Comment = ({isDarkMode, comment}) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const [ commentUser, setCommentUser ] = useState([])
    const [ elapsedTime, setElapsedTime ] = useState('')
    const [ PostModel, setPostModel ] = useState(false)

    const token = getCookie('ACCESS_TOKEN');
    let authUserId = '';
    if(token) {
        const decodedToken = jwtDecode(token)
        authUserId = parseInt(decodedToken.sub)
    }
    const getCommentUser = async () => {
        const response = await axios.get(`${API_BASE_URL}/api/user/${comment.user_id}`, config())
            .then(({data}) => {
                return data
            }).catch((error) => {
                console.log(error)
            })
        return response
    }
    useEffect(() => {
        const date = new Date(comment.updated_at)
        timeCalculator(date, setElapsedTime)
        getCommentUser().then((data) => {
            setCommentUser(data)
        })
    }, [])
    return (
        <div className="my-4 w-fit">
            <div className="chat-message">
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 max-w-xs mx-2 order-2 items-start">
                        <div>
                            <span className={isDarkMode ? "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-slate-900 text-white text-sm" : "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 text-sm"}>
                                <div className="flex justify-between gap-8">
                                    <p className="user-name text-xs text-gray-400 mb-1">{commentUser.name}</p>
                                    { authUserId === commentUser.id ? <DropDownMenu setPostModel={setPostModel} /> : '' }
                                </div>
                                {comment.content}
                            </span>
                            <p className="w-full flex justify-end text-xs pr-3">{elapsedTime}</p>
                        </div>
                    </div>
                    <img src={commentUser && `http://127.0.0.1:8000/storage/usersImages/${commentUser.image}`} alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                </div>
            </div>
            <div className="comment-likes flex items-center justify-end px-5">
                {/*<Like isDarkMode={isDarkMode}/>*/}
            </div>
        </div>
    )
}

export default Comment