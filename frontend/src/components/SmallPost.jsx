const SmallPost = ({isDarkMode}) => {
    return (
        <div className={isDarkMode ? "mb-2 border rounded border-gray-700" : "mb-2 border rounded"}>
            <div className="post-wrapper flex flex-col gap-1 p-2">
                <img className="h-20 w-full" src="https://via.placeholder.com/300" alt="" />
                <h3 className="text-md font-medium">title</h3>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae...</p>
            </div>
        </div>
    )
}

export default SmallPost