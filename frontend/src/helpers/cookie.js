function getCookie(name) {
    const allCookies = document.cookie.split(';')
    for(let i = 0; i < allCookies.length; i++) {
        let cookie = allCookies[i].trim()
        if(cookie.startsWith(name + "=")) {
            return cookie.slice(name.length + 1)
        }else {
            return false
        }
    }
}

export default getCookie