import {useState} from "react";

const DropDownMenu = ({setPostModel, deletePost}) => {
    const [ dropDown, setDropdown] = useState(false)
    return (
        <div className="post-menu relative z-10">
            <button id="show-post-dropdown" onClick={() => setDropdown(!dropDown)} className="text-xl"><i className='bx bx-dots-horizontal-rounded'></i></button>
            <div id="post-dropdown" className={dropDown ? "absolute right-0 p-2 bg-secondary text-white rounded" : "absolute hidden right-0 p-2 bg-secondary text-white rounded"}>
                <ul className="">
                    <li className="pr-20 cursor-pointer" onClick={() => setPostModel(true)}>Edit</li>
                    <li className="pr-20"><a href="#">Share</a></li>
                    <li className="pr-20"><a href="#">View</a></li>
                    <li className="pr-20 cursor-pointer" onClick={deletePost}>Delete</li>
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu