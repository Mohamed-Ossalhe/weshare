const CreatePostModel = ({ fire, setFire, isDarkMode }) => {
    if(fire) {
        return (
        <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-black/30 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-2xl md:h-auto">
                <div className={isDarkMode ? "relative rounded-lg shadow bg-gray-700" : "relative bg-white rounded-lg shadow"}>
                    <div className={isDarkMode ? "flex items-start justify-between p-4 border-b rounded-t border-gray-600" : "flex items-start justify-between p-4 border-b rounded-t"}>
                        <h3 className={isDarkMode ? "text-xl font-semibold text-white" : "text-xl font-semibold text-gray-900"}>
                            New Idea
                        </h3>
                        <button type="button" onClick={() => setFire(false)} className={isDarkMode ? "text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" : "text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"} data-modal-hide="staticModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        
                    </div>
                    <div className={isDarkMode ? "flex items-center p-6 space-x-2 border-t rounded-b border-gray-600" : "flex items-center p-6 space-x-2 border-t rounded-b border-gray-600"}>
                        <button data-modal-hide="staticModal" type="button" className={isDarkMode ? "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}>I accept</button>
                        <button data-modal-hide="staticModal" onClick={() => setFire(false)} type="button" className={isDarkMode ? "focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600" : "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"}>Decline</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CreatePostModel