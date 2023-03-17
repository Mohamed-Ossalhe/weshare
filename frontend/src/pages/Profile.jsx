import Navbar from "../components/navbar.jsx";
import {useEffect, useState} from "react";
import SmallPost from "../components/SmallPost.jsx";
import axios from "axios";

const Profile = () => {
    const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('mode')))
    const [ recentPosts, setRecentPosts ] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    useEffect(() => {
        const fetchRecentPosts = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/recent-posts')
                .then((response) => {
                    const {data} = response
                    return data
                }).catch((error) => {
                    console.log(error)
                })
            return response
        }
        fetchRecentPosts().then((response) => {
            setRecentPosts(response)
            setLoading(false)
        })
    }, [])
    const handleDarkMode = () => {
        setDarkMode(!isDarkMode)
        localStorage.setItem('mode', JSON.stringify(!isDarkMode))
    }
    return (
        <div className={isDarkMode ? "profile h-screen overflow-hidden bg-slate-800 text-white" : "profile h-screen overflow-hidden"}>
            <Navbar isDarkMode={isDarkMode} onToggle={handleDarkMode}/>
            <div className={isDarkMode ? "profile-container container flex flex-col gap-4 mx-auto px-4 md:px-20 mt-3 max-h-full bg-slate-800 text-white relative w-full overflow-y-scroll md:overflow-y-hidden" : "profile-container container flex flex-col gap-4 mx-auto px-4 md:px-20 mt-3 max-h-full relative w-full overflow-y-scroll md:overflow-y-hidden"}>
                <div className="profile-header flex items-center justify-between flex-col md:flex-row gap-8 border rounded px-4 py-5">
                    <div className="profile-info flex flex-col items-center md:flex-row gap-8">
                        <div className="profile-image">
                            <img className="rounded-full border-2 border-secondary" src="https://randomuser.me/api/portraits/men/63.jpg" alt=""/>
                        </div>
                        <div className="profile-informations text-center md:text-left">
                            <h2 className="text-2xl">John Doe</h2>
                            <p>@jhon_doe</p>
                            <span>example@example.com</span>
                        </div>
                    </div>
                    <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
                        <div className="total-posts flex flex-col items-center gap-1">
                            <i className='bx bx-detail text-secondary text-4xl'></i>
                            {/* <i class='bx bxs-layer'></i> */}
                            <span className="text-sm">Total Posts</span>
                            <h2 className="text-xl font-bold">100K</h2>
                        </div>
                        <div className="total-likes flex flex-col items-center gap-1">
                            <i className='bx bx-like text-secondary text-4xl'></i>
                            <span className="text-sm">Total Likes</span>
                            <h2 className="text-xl font-bold">100K</h2>
                        </div>
                    </div>
                    <div className="profile-btns flex items-center gap-3">
                        <button className="py-2 px-4 border rounded flex gap-3 items-center text-md">
                            <i className='bx bx-edit-alt'></i>
                            Edit Profile
                        </button>
                        <button className="py-2 px-4 border rounded flex gap-3 items-center bg-red-500 text-white text-md">
                            <i className='bx bx-minus-circle'></i>
                            Delete Profile
                        </button>
                    </div>
                </div>
                <div className="profile-body border rounded flex items-start justify-between gap-3 flex-col md:flex-row px-4 py-5">
                    <div className="informations">
                        <h2 className="mb-3 font-bold">Personal Informations</h2>
                        <div className="info-wrapper flex flex-col gap-3">
                            <p className="text-md font-medium">Full Name: <span className="font-normal">Jhone Doe</span></p>
                            <p className="text-md font-medium">Email Address: <span className="font-normal">Jhonedoe@gmail.com</span></p>
                            <p className="text-md font-medium">Phone Number: <span className="font-normal">+212 0912 304 323</span></p>
                            <p className="text-md font-medium">Birth Date: <span className="font-normal">12/12/1200</span></p>
                        </div>
                    </div>
                    <div className="recent-posts w-full md:w-2/4">
                        <h2 className="mb-3 font-bold">Recent Posts</h2>
                        <div className="posts-wrapper h-40 overflow-y-scroll scrollbar-hide h-52">
                            {isLoading && <div className="border border-gray-700 shadow rounded-md p-4 max-w-full w-full mx-auto">
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
                            {recentPosts && recentPosts.map((post) => {
                                return <SmallPost key={post.id} title={post.title} body={post.description}/>
                            })}
                        </div>
                        <button className="py-2 px-3 mt-2 bg-gray-600 text-white border rounded">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile