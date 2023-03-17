import ImageInput from "../ImageInput.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import CategoryModal from "./CategoryModal.jsx";

const CreatePostModel = ({ fire, setFire, isDarkMode }) => {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const categoryRef = useRef()
    const [ images, setImage ] = useState([])
    const userId = 1
    const [ errors, setErrors ] = useState(null)
    const [ categories, setCategories ] = useState([])
    const [ categoriesSelected, setCategoriesSelected ] = useState([])
    const [ isCalled, setCall ] = useState(false)

    useEffect(() => {
        const getCategories = async () => {
            await axios.get('http://127.0.0.1:8000/api/category')
                .then(({data}) => {
                    setCategories(data)
                }).catch((error) => {
                    console.log(error)
                })
        }
        getCategories()
    }, [])

    const handleCheckBox = (e) => {
        const {value} = e.target
        if (categoriesSelected.includes(value)) {
            setCategoriesSelected(categoriesSelected.filter(val => val !== value));
        } else {
            setCategoriesSelected([...categoriesSelected, value]);
        }
    }
    const submitForm = async (e) => {
        e.preventDefault()
        //console.log(categoriesSelected)
        //console.log(images)
        const formData = new FormData()
        formData.append('title', titleRef.current.value)
        formData.append('description', descriptionRef.current.value)
        formData.append('category_id', categoriesSelected)
        formData.append('user_id', userId)
        for(let i = 0; i < images.length; i++) {
            formData.append(`image[${i}]`, images[i])
        }
        console.log(categoriesSelected)
        console.log(formData)
        await axios.post('http://127.0.0.1:8000/api/posts', formData, {headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then((response) => {
                console.log(response)
                setFire(false)
            })
            .catch((response) => {
                console.log(response)
            })
    }
    const callCategoryModal = () => {
        setCall(true)
    }
    if(fire) {
        return (
        <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-black/30 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative flex items-center justify-center w-full h-full max-w-2xl md:h-auto">
                <form method="post" onSubmit={submitForm} className={isDarkMode ? "relative rounded-lg shadow bg-gray-700 w-full" : "relative bg-white rounded-lg shadow w-full"}>
                    <div className={isDarkMode ? "flex items-start justify-between p-4 border-b rounded-t border-gray-600" : "flex items-start justify-between p-4 border-b rounded-t"}>
                        <h3 className={isDarkMode ? "text-xl font-semibold text-white" : "text-xl font-semibold text-gray-900"}>
                            New Idea
                        </h3>
                        <button type="button" onClick={() => setFire(false)} className={isDarkMode ? "text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" : "text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"} data-modal-hide="staticModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <input ref={titleRef} className={isDarkMode ? "block p-2.5 w-full text-sm text-white rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" : "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg"} type="text" placeholder="Idea Title..."/>
                        {errors && <p className={isDarkMode ? "text-sm text-red-500" : "text-sm text-red-600"}>{errors.title}</p>}

                        <div className="categories flex gap-5 items-center">
                            <label htmlFor="category">Categories: </label>
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {categories && categories.map((categorie) => {
                                    return (
                                        <li key={categorie.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input onChange={handleCheckBox} id="angular-checkbox-list" type="checkbox" value={categorie.id}
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                <label htmlFor="angular-checkbox-list"
                                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{categorie.title}</label>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                            <button type="button" onClick={callCategoryModal} title="Add New Category"
                                    className={isDarkMode ? "text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800" : "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"}>
                                <i className='bx bx-message-square-add'></i>
                            </button>
                        </div>

                        <textarea ref={descriptionRef} id="message" rows="5"
                                  className={isDarkMode ? "block p-2.5 w-full text-sm text-white rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" : "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg"}
                                  placeholder="Write your Idea Here...">
                        </textarea>
                        {errors && <p className={isDarkMode ? "text-sm text-red-500" : "text-sm text-red-600"}>{errors.description}</p>}
                        <ImageInput setImage={setImage}/>
                    </div>
                    <div className={isDarkMode ? "flex items-center p-6 space-x-2 border-t rounded-b border-gray-600" : "flex items-center p-6 space-x-2 border-t rounded-b border-gray-600"}>
                        <button data-modal-hide="staticModal" type="submit" className={isDarkMode ? "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}>Post Idea</button>
                        <button data-modal-hide="staticModal" onClick={() => setFire(false)} type="button" className={isDarkMode ? "focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600" : "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"}>Discard</button>
                    </div>
                </form>
                <CategoryModal isCalled={isCalled} setCall={setCall} isDarkMode={isDarkMode} />
            </div>
        </div>
        )
    }
}

export default CreatePostModel