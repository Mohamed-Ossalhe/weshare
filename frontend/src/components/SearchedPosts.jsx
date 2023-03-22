import SmallPost from "./SmallPost.jsx";
import {Link} from "react-router-dom";

const SearchedPosts = ({ isDarkMode, posts }) => {
    return (
        <div className={isDarkMode ? "absolute w-full bg-gray-800 border border-gray-600 mt-2 text-white rounded py-4 px-2 h-80 overflow-y-scroll scrollbar-hide":"absolute w-full bg-white border mt-2 text-black rounded py-4 px-2 h-80 overflow-y-scroll scrollbar-hide"}>
            {posts && posts.map((post) => {
                return <Link to={`/post/${post.title}`} key={post.id}><SmallPost isDarkMode={isDarkMode} props={post} /></Link>
            })}
        </div>
    )
}

export default SearchedPosts