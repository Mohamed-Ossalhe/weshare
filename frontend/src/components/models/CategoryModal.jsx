import axios from "axios";
import {useRef} from "react";

const CategoryModal = ({isCalled, setCall, isDarkMode}) => {

    const categoryTitleRef = useRef()
    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            'title': categoryTitleRef.current.value
        }
        await axios.post('http://127.0.0.1:8000/api/category', data)
            .then((response) => {
                console.log(response)
                setCall(false)
            }).catch((error) => {
                console.log(error)
            })
    }
    if(isCalled) {
        return (
            <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full cat-wrapper bg-slate-500/40 px-4">
                <div
                    className={isDarkMode ? "w-full p-4 text-center border rounded-lg shadow sm:p-4 bg-gray-800 border-gray-700" : "w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-4"}>
                    <div className={isDarkMode ? "flex items-center justify-between w-full text-white border-b rounded-t border-gray-600 mb-4" : "flex items-center justify-between w-full text-gray-700 border-b rounded-t mb-4"}>
                        <label htmlFor="simple-search">Add New Category</label>
                        <button type="button" onClick={() => setCall(false)} className={isDarkMode ? "text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" : "text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"} data-modal-hide="staticModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <form className="flex flex-col items-center" onSubmit={onSubmit}>
                        <div className="relative w-full flex items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <i className='bx bx-category-alt'></i>
                            </div>
                            <input type="text" id="simple-search" ref={categoryTitleRef}
                                   className={isDarkMode ? "text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"}
                                   placeholder="Category Name" required />
                            <button type="submit"
                                    className={isDarkMode ? "p-2.5 ml-2 text-sm font-medium text-white rounded-lg focus:outline-none bg-blue-600 hover:bg-blue-700" : "p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:outline-none"}>
                                <i className='bx bx-save text-xl'></i>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CategoryModal