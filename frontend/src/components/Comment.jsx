import Like from "./Like.jsx";

const Comment = ({isDarkMode}) => {
    return (
        <div className="my-4 w-fit">
            <div className="chat-message">
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 max-w-xs mx-2 order-2 items-start">
                        <div><span className={isDarkMode ? "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-slate-900 text-white text-sm" : "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 text-sm"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, velit.</span></div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                </div>
            </div>
            <div className="comment-likes flex items-center justify-end px-5">
                <Like isDarkMode={isDarkMode}/>
            </div>
        </div>
    )
}

export default Comment