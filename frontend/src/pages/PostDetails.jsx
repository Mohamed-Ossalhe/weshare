import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import Comment from "../components/Comment.jsx";
import {Pagination, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const PostDetails = () => {
    const {title} = useParams()
    const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('mode')))
    const [ postData, setPostData ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('http://127.0.0.1:8000/api/posts/' + title)
            .then(({data}) => {
                setPostData(data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
    },[])
    console.log(postData)
    const handleDarkMode = () => {
        setDarkMode(!isDarkMode)
        localStorage.setItem('mode', JSON.stringify(!isDarkMode))
    }
    return (
        <div className={isDarkMode ? "profile h-screen overflow-hidden bg-slate-800 text-white": "profile h-screen overflow-hidden"}>
            <Navbar isDarkMode={isDarkMode} onToggle={handleDarkMode}/>
            <div className="container px-20 mt-5">
                <div className="post-image w-full grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col col-span-1">
                        {isLoading &&
                            <div role="status"
                                 className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                <div
                                    className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"
                                         viewBox="0 0 640 512">
                                        <path
                                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                                    </svg>
                                </div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                <div className="flex items-center mt-4 space-x-3">
                                    <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <div
                                            className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                    </div>
                                </div>
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        <ProfileCard isDarkMode={isDarkMode}/>
                    </div>
                    <div className="col col-span-3 overflow-y-scroll max-h-[33rem] scrollbar-hide">
                        {isLoading &&
                            <div role="status"
                                 className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:flex-col md:items-center md:gap-8">
                                <div
                                    className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-full dark:bg-gray-700">
                                    <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                                        <path
                                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                                    </svg>
                                </div>
                                <div className="w-full">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>

                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-4 mb-4"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>

                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-4 mb-4"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                    <div
                                        className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                </div>
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        <div className="post-image">
                            <Swiper pagination={{dynamicBullets: true}} autoplay={true} speed={2500} loop={true} modules={[Pagination, Autoplay]} className="mySwiper w-full">
                                {postData && postData.images.map((image) => {
                                    return <SwiperSlide key={image.id}><img className="object-cover w-full h-60 md:h-96 rounded-t-lg" alt="post image" src={`http://127.0.0.1:8000/storage/postImages/${image.content}`}/></SwiperSlide>
                                })}
                            </Swiper>
                        </div>
                        <div className="post-text">
                            <h1 className="post-title text-3xl font-bold my-4">{postData && postData.title}</h1>
                            <p className="post-description text-xl font-normal">{postData && postData.description}</p>
                        </div>
                        <div className="post-footer">
                            <div className="likes"></div>
                            <div className="comments mt-10">
                                <h1 className="flex items-center justify-between w-full text-xl text-secondary">FeedBacks: <hr className="w-4/5 bg-secondary border-none h-1"/></h1>
                                <Comment isDarkMode={isDarkMode} />
                                <Comment isDarkMode={isDarkMode}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails