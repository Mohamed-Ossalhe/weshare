import {useEffect, useState} from "react"
import PostInput from "../components/AddPostInput"
import Navbar from "../components/navbar"
import Post from "../components/Post"
import ProfileCard from "../components/ProfileCard"
import SmallPost from "../components/SmallPost"
import axios from "axios";

const Home = () => {
    const [ posts, setPosts ] = useState([])
    const [ recentPosts, setRecentPosts ] = useState([])
    const [ isDarkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('mode')))
    const [ isLoading, setLoading ] = useState(true)
    const loadingPostContent = <div className="border shadow rounded-md p-4 max-w-full w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>
    </div>;
    const handleDarkMode = () => {
        //setDarkMode(!isDarkMode)
        if(!localStorage.getItem("mode")) {
            localStorage.setItem('mode', JSON.stringify(false))
        }
        setDarkMode(!(JSON.parse(localStorage.getItem('mode'))))
        localStorage.setItem('mode',JSON.stringify(!isDarkMode))
    }

    useEffect(() => {
        const fetchAllPosts = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/posts')
                .then((response) => {
                    const {data} = response
                    setPosts(data)
                    setLoading(false)
                }).catch((error) => {
                    console.log(error)
                })
        }
        const fetchRecentPosts = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/recent-posts')
                .then((response) => {
                    const {data} = response
                    setRecentPosts(data)
                    setLoading(false)
                }).catch((error) => {
                    console.log(error)
                })
        }
        const PostsInterval = setInterval(() => {
            fetchAllPosts().then(() => fetchRecentPosts())
        }, 6000)
        // clear the interval when the component unmount
        return () => clearInterval(PostsInterval)

    }, [])

    return (
        <div className={isDarkMode ? "home-page h-screen relative overflow-hidden bg-slate-800 text-white": "home-page h-screen relative overflow-hidden"}>
            <Navbar isDarkMode={isDarkMode} onToggle={handleDarkMode} />
            <div className="content container mx-auto px-4 md:px-20 grid gap-8 mt-3 grid-cols-1 md:grid-cols-4 h-full relative w-full">
                <div className={isDarkMode ? "col h-fit col-span-1 border border-gray-700 rder-white rounded px-2 hidden md:block" : "col h-fit col-span-1 border rounded px-2 hidden md:block"}>
                    <h2 className="text-md mb-2 font-medium">Your Recent Post</h2>
                    {isLoading && loadingPostContent}
                    {recentPosts && recentPosts.map((recentPost) => {
                        return <SmallPost key={recentPost.id} isDarkMode={isDarkMode} title={recentPost.title} body={recentPost.description}/>
                    })}
                </div>
                <div className="col col-span-2">
                    <PostInput isDarkMode={isDarkMode}/>
                    <div className="posts scrollbar-hide max-h-[37rem] md:max-h-[30rem] pb-10 flex flex-col gap-4 overflow-x-hidden overflow-y-scroll mt-2">
                        {isLoading && loadingPostContent}
                        {posts && posts.map((post) => {
                            const postDate = new Date(post.updated_at)
                            return <Post key={post.id} isDarkMode={isDarkMode} date={postDate} title={post.title} body={post.description}/>
                        })}
                    </div>
                </div>
                <div className="col h-full col-span-1 hidden md:block">
                    <ProfileCard isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    )
}

export default Home