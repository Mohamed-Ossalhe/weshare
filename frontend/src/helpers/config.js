import getCookie from "./cookie.js";

const config = () => {
    const token = getCookie('ACCESS_TOKEN')
    const axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': 'http://localhost:5173/'
        }
    }
    return axiosConfig
}

export default config