import ApiService from './ApiService'
import LoggedUser from '../models/LoggedUser'

export default class LoginService {
    static login(email, password) {
        return ApiService.login(email, password)
        .then(res => {
            const loggedUser = new LoggedUser(
                res.data.email,
                res.data.name,
                res.data.accessToken
            )
            LoginService._setLoggedUser(loggedUser)
            return loggedUser
        })
    }

    static getLoggedUser() {
        const saved = localStorage.getItem('logged_user')
        if (!!saved) {
            const parsed = JSON.parse(saved)
            return new LoggedUser(parsed.email, parsed.name, parsed.accessToken)
        }

        return ""
    }

    static logout() {
        const logged = LoginService.getLoggedUser()
        return ApiService.logout(logged.accessToken)
            .then(res => {
                localStorage.removeItem('logged_user')
                return true
            })
    }

    static _setLoggedUser(loggedUser) {
        localStorage.setItem('logged_user', JSON.stringify(loggedUser))
    }

}