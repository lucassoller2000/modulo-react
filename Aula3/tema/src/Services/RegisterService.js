// import CONFIG from '../config'
import ApiService from './ApiService'
// import axios from 'axios'
import NewAccountModel from '../models/NewAccount'

export default class RegisterService {
    static register(email, name, password) {
        return ApiService.register(email, name, password)
        .then(res => {
            return new NewAccountModel(
                res.data.id,
                res.data.email,
                res.data.name
            )
        })
        .catch(err => {
            console.log(err)
        })
    }
}