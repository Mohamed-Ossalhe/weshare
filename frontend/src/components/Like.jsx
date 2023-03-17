import {useState} from "react";
import axios from "axios";

const Like = ({isDarkMode, likes, postId}) => {
    const [ toggle, setToggle ] = useState(false)
    const onLike = async () => {
        const data = {
            'user_id': 1,
            'post_id': postId
        }
        await axios.post('http://127.0.0.1:8000/api/like', data)
            .then((response) => {
                console.log(response)
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
            <p>{likes.length}</p>
        </button>
    )
}

export default Like