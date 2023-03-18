import {useEffect, useState} from "react";
import axios from "axios";

const Like = ({isDarkMode, likes, postId, reGetData}) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const [ toggle, setToggle ] = useState(false)
    const data = {
        'user_id': 1,
        'post_id': postId
    }
    
    useEffect(() => {
        const checkLike = async () => {
            await axios.get(`${API_BASE_URL}/api/like/${data.user_id}/${data.post_id}`)
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
    }, []);
    const onLike = async () => {
        await axios.post(`${API_BASE_URL}/api/like`, data)
            .then((response) => {
                console.log(response)
                reGetData()
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <button className="likes flex items-center gap-1 cursor-pointer" onClick={() => {
            setToggle(!toggle)
            onLike()
        }}>
            <i className={toggle ? ('bx bx-like text-secondary text-2xl'): (isDarkMode ? 'bx bx-like text-white text-2xl' : 'bx bx-like text-black text-2xl')}></i>
            <p className={toggle ? ('text-secondary text-2xl'): ("text-white")}>{likes.length}</p>
        </button>
    )
}

export default Like