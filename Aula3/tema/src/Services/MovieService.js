import LoginService from './LoginService'
import ApiService from './ApiService'

export default class MovieService{
    static getMovies() {    
        const loggedUser = LoginService.getLoggedUser()
        return ApiService.getMovies(loggedUser.accessToken)
    }

    static createMovieNew(title, text, category, image) {
        const loggedUser = LoginService.getLoggedUser()
        return ApiService.createMovieNew(title, text, category, loggedUser.accessToken, image)
    }
}