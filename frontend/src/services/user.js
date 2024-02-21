import axios from "axios";

const baseUrl = 'http://localhost:3001'

export class UserService{

    loginRequest(email, senha){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const data = {email, senha}
        return axios.post(`${baseUrl}/login`, data, config)
    }

    userData(user){

    }
}