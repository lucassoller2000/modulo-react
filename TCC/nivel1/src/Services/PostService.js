import LoginService from './LoginService'
import ApiService from './ApiService'

export default class PostService{
    static createPost(title, description, text, image) {
        const loggedUser = LoginService.getLoggedUser()
        return ApiService.createPost(title, description, text, loggedUser.accessToken, image)
    }

    static editPost(title, description, text, image, id) {
        const loggedUser = LoginService.getLoggedUser()
        return ApiService.editPost(title, description, text, loggedUser.accessToken, image, id)
        .then(result=>{
            console.log(result)
        })
    }
}