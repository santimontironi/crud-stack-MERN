import axios from 'axios'

const URL_BACKEND = 'http://localhost:3000'

export function registerAxios(user){
    return axios.post(`${URL_BACKEND}/register`,user)
}

export function loginAxios(user){
    return axios.post(`${URL_BACKEND}/login`,user)
}

export function logoutAxios(){
    return axios.post(`${URL_BACKEND}/logout`)
}

export function addTaskAxios(task){
    return axios.post(`${URL_BACKEND}/addTask`,task)
}