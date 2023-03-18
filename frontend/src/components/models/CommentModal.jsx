import {useRef} from "react";
import axios from "axios";

const CommentModal = ({ isDarkMode, postId, reGetData }) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const commentRef = useRef()

    const onSubmit = async (e) => {
        e.preventDefault()
        const commentData = {
            'content': commentRef.current.value,
            'user_id': 1,
            'post_id': postId
        }
        await axios.post(`${API_BASE_URL}/api/comment`, commentData)
            .then((response) => {
                console.log(response)
                commentRef.current.value = ''
                reGetData()
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
            <div
                className={isDarkMode ? "w-full p-4 text-center rounded-lg shadow sm:p-4" : "w-full p-4 text-center rounded-lg shadow sm:p-4"}>
                <form className="flex flex-col items-center" onSubmit={onSubmit}>
                    <div className="relative w-full flex items-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i className='bx bx-category-alt'></i>
                        </div>
                        <input type="text" id="simple-search" ref={commentRef}
                               className={isDarkMode ? "text-sm rounded-lg block w-full focus:outline-none pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg block w-full pl-10 p-2.5"}
                               placeholder="Type your Comment Here..." required />
                        <button type="submit"
                                className={isDarkMode ? "p-2.5 ml-2 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700" : "p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800"}>
                            <i className='bx bx-save text-xl'></i>
                            <span className="sr-only">Send</span>
                        </button>
                    </div>
                </form>
            </div>
    );
}

export default CommentModal