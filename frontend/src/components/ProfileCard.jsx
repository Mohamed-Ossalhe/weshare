const ProfileCard = () => {
    return (
        <div className="w-full">
            <div className="w-full max-w-sm bg-white border py-9 border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg border-2 border-secondary" src="https://randomuser.me/api/portraits/men/63.jpg" alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
                        <div className="total-posts flex flex-col items-center gap-1">
                            <i className='bx bx-detail text-secondary text-4xl'></i>
                            {/* <i class='bx bxs-layer'></i> */}
                            <span className="text-sm">Total Posts</span>
                            <h2 className="text-xl font-bold">100</h2>
                        </div>
                        <div className="total-likes flex flex-col items-center gap-1">
                            <i className='bx bx-like text-secondary text-4xl'></i>
                            <span className="text-sm">Total Likes</span>
                            <h2 className="text-xl font-bold">100K</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard