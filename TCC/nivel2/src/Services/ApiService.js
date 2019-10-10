import CONFIG from '../config'
import axios from 'axios'
import LoggedUser from '../models/LoggedUser'
import LoginService from './LoginService'


export default class ApiService {
    static login(email, password){
        return axios.post(`${CONFIG.API_URL_BASE}/blogger`,{
            email,
            password
        })
        .then(res =>{
            const loggedUser = new LoggedUser(
                res.data.email,
                res.data.name,
                res.data.accessToken
            )
            LoginService._setLoggedUser(loggedUser)
            return loggedUser
        })
    }

    static getPost(accessToken, usuario, id) {
        return axios.get(`${CONFIG.API_URL_BASE}/post/${usuario}/${id}`, {
            headers: {
                authorization: accessToken
            }
        })
    }

    static getPosts(accessToken, usuario) {
        return axios.get(`${CONFIG.API_URL_BASE}/posts/${usuario}`, {
            headers: {
                authorization: accessToken
            }
        })
    }

    static createPost(title, description, text, accessToken, image){
        return axios.post(
            `${CONFIG.API_URL_BASE}/post`,{
                title,
                description,
                text,
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

    static logout(accessToken) {
        return axios.post(
            `${CONFIG.API_URL_BASE}/bloggerLogout`,
            {
                authorization: accessToken
            }
        )
    }

    static deletePost(accessToken, id){
        debugger
        return axios.delete(
            `${CONFIG.API_URL_BASE}/post/${id}`,
            {
                headers: {
                    authorization: accessToken,
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    static editPost(title, description, text, accessToken, image, id){
        return axios.put(
            `${CONFIG.API_URL_BASE}/post/${id}`,
            {
                title,
                description,
                text,
                image,    
            },
            {
                headers: {
                    authorization: accessToken,
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}