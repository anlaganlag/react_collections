import axios from 'axios';
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api'

class userService {

    register(data) {
        return axios
            .post(baseUrl + '/user/userSignUp', data)
            .then(response => { return response })
            .catch(error => { return error })
    }

    login(data) {
        return axios
            .post(baseUrl + '/user/login', data)
            .then(response => { return response })
            .catch(error => { return error })
    }

    forgot(data) {
        return axios
            .post(baseUrl + '/user/reset', data)
            .then(response => { return response })
            .catch(error => { return error })
    }

    reset(data,token) {
        return axios
            .post(baseUrl + `/user/reset-password?access_token=${token}`, data)
            .then(response => { return response })
            .catch(error => { return error })
    }

    logout(data,token) {
        return axios
            .post(baseUrl + `/user/logout?access_token=${localStorage.getItem('token')}`)
            .then(response => { return response })
            .catch(error => { return error })
    }

}

export default userService;

