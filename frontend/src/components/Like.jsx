import {useEffect, useState} from "react";
import axios from "axios";
import config from "../helpers/config.js";
import getCookie from "../helpers/cookie.js";
import jwtDecode from "jwt-decode";

const Like = ({isDarkMode, likes, postId, reGetData}) => {
    const token = getCookie('ACCESS_TOKEN')
    let decodedToken = ''
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const [ toggle, setToggle ] = useState(false)
    if(token) {
        decodedToken = jwtDecode(token)
    }
    const data = {
        'user_id': decodedToken.sub,
        'post_id': postId
    }
    
    useEffect(() => {
        const checkLike = async () => {
            await axios.get(`${API_BASE_URL}/api/like/${data.user_id}/${data.post_id}`, config())
                .then(({data}) => {
                    if(data === 1) {
                        setToggle(true)
                    }else {
                        setToggle(false)
                    }
                }).catch((error) => {
                    console.log(error)
                })
        }
        checkLike()
    }, [toggle]);
    const onLike = async () => {
        if(token) {
            await axios.post(`${API_BASE_URL}/api/like`, data, config())
                .then((response) => {
                    console.log(response)
                    reGetData()
                    setToggle(!toggle)
                }).catch((error) => {
                    console.log(error)
                })
        }else {
            alert("please log in first")
        }
    }
    return (
        <button className="likes flex items-center gap-1 cursor-pointer" onClick={() => onLike()}>
            <i className={toggle ? ('bx bx-like text-secondary text-2xl'): (isDarkMode ? 'bx bx-like text-white text-2xl' : 'bx bx-like text-black text-2xl')}></i>
            <p className={toggle ? ('text-secondary'): (isDarkMode ? "text-white" : "text-black")}>{likes.length}</p>
        </button>
    )
}

export default Like