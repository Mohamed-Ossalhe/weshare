import {useState} from "react";

const ImageInput = ({setImage}) => {
    const [selectedImages, setSelectedImages] = useState([])
    const onSelected = (event) => {
        setImage(event.target.files)
        const selectedFiles = event.target.files
        const selectedFilesArray = Array.from(selectedFiles)
        const imagesArray = selectedFilesArray.map((file) => {
           return URL.createObjectURL(file)
        })
        //setImage(selectedFilesArray)
        setSelectedImages(imagesArray)
    }

    const removeImage = (image) => {
        setSelectedImages(selectedImages.filter((e) => e !== image))
    }
    return (
        <div className="image-uploader flex gap-3">
            <div className="file-input">
                <label htmlFor="images" className="text-4xl hover:text-secondary cursor-pointer transition"><i className='bx bx-image-add'></i></label>
                <input type="file" onChange={onSelected} max={3} className="hidden" id="images" name="image[]" multiple accept="image/png , image/jpeg" />
            </div>
            <div className="images-preview flex gap-2">
                {selectedImages && selectedImages.map((image, index) => {
                    return (
                        <div key={image} className="image border border-secondary rounded h-14 relative">
                            <div className="delete-btn absolute -top-2 -right-2 text-2xl text-red-500 cursor-pointer" onClick={()=>removeImage(image)}>
                                <i className='bx bxs-minus-circle'></i>
                            </div>
                            <img className="h-full" src={image} alt="image" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageInput