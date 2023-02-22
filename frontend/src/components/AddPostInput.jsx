import { useState } from "react"
import CreatePostModel from "./models/CreatePostModel"

const PostInput = () => {
    const [ PostModel, setPostModel ] = useState(false)
    return (
        <div>
            <div className="container mx-auto px-4 border border-black rounded">
                <div className="input-wrapper flex items-center py-2 px-6 gap-4">
                    <div className="profile-img flex items-center w-[10%]">
                        <img className="md:w-10 md:h-10 w-6 h-6 rounded-full shadow-lg border border-secondary" src="https://randomuser.me/api/portraits/men/63.jpg" alt="Bonnie image"/>
                    </div>
                    <div className="post-input px-8 border-l-2 border-secondary flex items-center w-[90%]">
                        <input className="border-0 w-full" onClick={() => setPostModel(true)} type="text" name="post" id="post-input" placeholder="Hey Name! What's Your Next Idea?..." readOnly/>
                    </div>
                </div>
            </div>
            <CreatePostModel  fire={PostModel} setFire={setPostModel}/>
        </div>
    )
}

export default PostInput