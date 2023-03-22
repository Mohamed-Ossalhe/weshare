import {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const SmallPost = ({isDarkMode, props}) => {
    return (
        <div className={isDarkMode ? "mb-2 border rounded border-gray-700" : "mb-2 border rounded"}>
            <div className="post-wrapper flex flex-col gap-1 p-2">
                <img className="object-cover h-20 w-full rounded-t-lg" alt="post image" src={props.images[0] && `http://127.0.0.1:8000/storage/postImages/${props.images[0].content}`}/>
                <h3 className="text-md font-medium">{props.title}</h3>
                <p className="text-xs truncate">{props.description}</p>
            </div>
        </div>
    )
}

export default SmallPost