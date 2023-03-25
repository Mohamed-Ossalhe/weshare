import {useRef, useState} from "react";
import axios from "axios";
import SearchedPosts from "../SearchedPosts.jsx";
import config from "../../helpers/config.js";

const SearchModal = ({isDarkMode}) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const searchValue = useRef()
    const [ searchPosts, setSearchPosts ] = useState(null)
    const onSubmit = async (e) => {
        e.preventDefault()
        const searchData = {
            'search': searchValue.current.value
        }
        await axios.post(`${API_BASE_URL}/api/posts/search`, searchData, config())
            .then(({data}) => {
                if(data.length !== 0) {
                    setSearchPosts(data)
                }else {
                    setSearchPosts("No Post Found")
                }
            }).catch((error) => {
                console.log(error)
            })
        searchValue.current.value = ""
    }
    return (
        <div className="relative search-form w-64">
            <form className="w-full" onSubmit={onSubmit}>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                             fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" ref={searchValue} id="default-search"
                           className={isDarkMode ? "block w-full p-3 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" : "block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"}
                           placeholder="Search Posts..." required />
                </div>
            </form>
            {searchPosts && <SearchedPosts isDarkMode={isDarkMode} posts={searchPosts}/>}
        </div>
    )
}

export default SearchModal