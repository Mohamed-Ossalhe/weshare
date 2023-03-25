import Like from "./Like.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import config from "../helpers/config.js";

const Comment = ({isDarkMode, comment}) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const [ commentUser, setCommentUser ] = useState([])
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
        getCommentUser().then((data) => {
            setCommentUser(data)
        })
    }, [])
    return (
        <div className="my-4 w-fit">
            <div className="chat-message">
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 max-w-xs mx-2 order-2 items-start">
                        <div><span className={isDarkMode ? "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-slate-900 text-white text-sm" : "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 text-sm"}>{comment.content}</span></div>
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