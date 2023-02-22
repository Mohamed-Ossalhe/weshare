import PostInput from "../components/AddPostInput"
import Navbar from "../components/navbar"
import Post from "../components/Post"
import ProfileCard from "../components/ProfileCard"
import SmallPost from "../components/SmallPost"

const Home = () => {
    return (
        <div className="home-page h-screen relative overflow-hidden">
            <Navbar />
            <div className="content container mx-auto px-4 md:px-20 grid gap-8 mt-3 grid-cols-1 md:grid-cols-4 h-full relative w-full">
                <div className="col h-fit col-span-1 border border-black rounded px-2 hidden md:block">
                    <h2 className="text-md mb-2 font-medium">Your Recent Post</h2>
                    <SmallPost />
                    <SmallPost />
                    <SmallPost />
                </div>
                <div className="col col-span-2">
                    <PostInput />
                    <div className="posts scrollbar-hide h-[19%] pb-20 flex flex-col gap-4 overflow-x-hidden overflow-y-scroll mt-2">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
                <div className="col h-full col-span-1 hidden md:block">
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}

export default Home