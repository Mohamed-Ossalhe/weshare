import {useEffect, useState} from "react"
import PostInput from "../components/AddPostInput"
import Post from "../components/Post"
import ProfileCard from "../components/ProfileCard"
import SmallPost from "../components/SmallPost"
import axios from "axios";
import {Link, Navigate} from "react-router-dom";
import config from "../helpers/config.js";
import getCookie from "../helpers/cookie.js";

const Home = ({user, isDarkMode}) => {
    const token = getCookie('ACCESS_TOKEN')
    if(!token) {
        return <Navigate to="/login"/>
    }
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const [ posts, setPosts ] = useState([])
    const [ recentPosts, setRecentPosts ] = useState([])
    const [ isLoading, setLoading ] = useState(false)
    const date = new Date()

    const fetchAllPosts = async () => {
        await axios.get( `${API_BASE_URL}/api/posts`, config())
            .then((response) => {
                const {data} = response
                setPosts(data)
                setLoading(false)
            }).catch((error) => {
                console.log(error)
            });
    }
    const fetchRecentPosts = async () => {
        if (user){
            const response = await axios.get(`${API_BASE_URL}/api/recent-posts/${user.id}`, config())
                .then(({data}) => {
                    setRecentPosts(data)
                    setLoading(false)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchAllPosts()
        fetchRecentPosts()
        const refresh = setInterval(() => {
            fetchAllPosts()
            fetchRecentPosts()
        }, 10000)
        return () => clearInterval(refresh)
    }, [])
    console.log(posts)
    return (
        <div className={isDarkMode ? "home-page h-screen relative overflow-hidden bg-slate-800 text-white": "home-page h-screen relative overflow-hidden"}>
            <div className="content container mx-auto px-4 md:px-20 grid gap-8 mt-3 grid-cols-1 md:grid-cols-4 h-full relative w-full">
                <div className={isDarkMode ? "col h-fit col-span-1 border border-gray-700 rounded px-2 hidden md:block pb-2" : "col h-fit col-span-1 border border-gray-200 rounded px-2 pb-2 hidden md:block"}>
                    <h2 className="text-md mb-2 font-medium">Your Recent Post</h2>
                    {isLoading && <div className={isDarkMode ? "border border-gray-700 shadow rounded-md p-4 max-w-full w-full mx-auto" : "border border-gray-200 shadow rounded-md p-4 max-w-full w-full mx-auto"}>
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
                    </div>}
                    {recentPosts && recentPosts.map((recentPost) => {
                        return <Link key={recentPost.id} to={`/post/${recentPost.title}`}><SmallPost isDarkMode={isDarkMode} props={recentPost}/></Link>
                    })}
                </div>
                <div className="col col-span-2">
                    <PostInput isDarkMode={isDarkMode} userImage={user && user.image} userId={user && user.id}/>
                    <div className="posts scrollbar-hide max-h-[37rem] md:max-h-[30rem] pb-10 flex flex-col gap-4 overflow-x-hidden overflow-y-scroll mt-2">
                        {isLoading && <div className={isDarkMode ? "border border-gray-700 shadow rounded-md p-4 max-w-full w-full mx-auto" : "border border-gray-200 shadow rounded-md p-4 max-w-full w-full mx-auto"}>
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
                        </div>}
                        {posts && posts.map((post) => {
                            const postDate = new Date(post.updated_at)
                            return <Post key={post.id} reGetData={fetchAllPosts} isDarkMode={isDarkMode} id={post.id} user={post.user} date={postDate} title={post.title} body={post.description} images={post.images} likes={post.likes} comments={post.comments}/>
                        })}
                    </div>
                </div>
                <div className="col h-full col-span-1 hidden md:block">
                    <ProfileCard isDarkMode={isDarkMode} user={user} />
                    <p className="text-gray-400 text-xs my-3">Copyright &copy; 2022 - {date.getFullYear()} | All Rights Reserved | Created and Developed By Mohamed OSSALHE</p>
                </div>
            </div>
        </div>
    )
}

export default Home