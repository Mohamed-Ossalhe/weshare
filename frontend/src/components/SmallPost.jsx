const SmallPost = ({isDarkMode, title, body}) => {
    return (
        <div className={isDarkMode ? "mb-2 border rounded border-gray-700 h-full" : "h-full mb-2 border rounded"}>
            <div className="post-wrapper flex flex-col gap-1 p-2">
                <img className="h-20 w-full" src="https://via.placeholder.com/300" alt="" />
                <h3 className="text-md font-medium">{title}</h3>
                <p className="text-xs truncate">{body}</p>
            </div>
        </div>
    )
}

export default SmallPost