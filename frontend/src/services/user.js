import axios from "axios";

export class UserService{

    constructor(){
        this.baseUrl = 'http://localhost:3001'
    }

    loginRequest(email, senha){
        const data = {email, senha}
        return axios.post(`${this.baseUrl}/login`, data)
    }

    userData(cliente_id, token){
        const config = {
            headers:{
            'Content-Type': 'application/json',
            'x-api-key': token
            }
        }
        return axios.get(`${this.baseUrl}/user/${cliente_id}`, config)
    }
}