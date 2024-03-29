import { useState } from "react"
import CreatePostModel from "./models/CreatePostModel"

const PostInput = ({ isDarkMode, userImage, userId }) => {
    const [ PostModel, setPostModel ] = useState(false)
    return (
        <div>
            <div className={isDarkMode ? "container mx-auto px-4 border border-gray-700 rounded" : "container mx-auto px-4 border rounded"}>
                <div className="input-wrapper flex items-center py-2 px-6 gap-4">
                    <div className="profile-img flex items-center w-[10%]">
                        <img className="md:w-10 md:h-10 w-6 h-6 rounded-full shadow-lg border border-secondary" src={userImage && `http://127.0.0.1:8000/storage/usersImages/${userImage}`} alt="Bonnie image"/>
                    </div>
                    <div className="post-input px-8 border-l-2 border-secondary flex items-center w-[90%]">
                        <input className={isDarkMode ? "border-0 w-full bg-slate-800" : "border-0 bg-white w-full"} onClick={() => setPostModel(true)} type="text" name="post" id="post-input" placeholder="Hey Name! What's Your Next Idea?..." readOnly/>
                    </div>
                </div>
            </div>
            <CreatePostModel  fire={PostModel} setFire={setPostModel} isDarkMode={isDarkMode} userId={userId}/>
        </div>
    )
}

export default PostInput