import CONFIG from '../config'
import axios from 'axios'

class ApiService {
    static register(email, name, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/createAccount`, {
            email,
            name,
            password
        })
    }

    static login(email, password){
        return axios.post(`${CONFIG.API_URL_BASE}/login`,{
            email,
            password
        })
    }

    static getMovies(accessToken) {
        return axios.get(`${CONFIG.API_URL_BASE}/movies`, {
            headers: {
                authorization: accessToken
            }
        })
    }

    static createMovieNew(title, description, category, accessToken, image){
        return axios.post(
            `${CONFIG.API_URL_BASE}/createMovieNew`,{
                title,
                description,
                category,
                image,
                
             },
            {
                headers: {
                    authorization: accessToken,
                    'Content-Type': 'application/json',
                }
            }
        )
    }

    static getCategories(){
        return axios.get(
            `${CONFIG.API_URL_BASE}/categories`,
            {}
        )
    }

    static logout(accessToken) {
        return axios.post(
            `${CONFIG.API_URL_BASE}/logout`,
            {},
            {
                authorization: accessToken
            }
        )
    }

    static deleteMovies(accessToken, id){
        return axios.post(
            `${CONFIG.API_URL_BASE}/deleteMovie`,
            {
                id
            },
            {
                authorization: accessToken
            }
        )
    }
}

export default ApiService