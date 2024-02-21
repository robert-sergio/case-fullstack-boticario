import axios from "axios";

export class UserService{

    constructor(){
        this.baseUrl = 'http://localhost:3001'
        this.myKey = process.env.NEXT_PUBLIC_API_KEY
        this.config = {
            headers:{
            'Content-Type': 'application/json',
            'x-api-key': this.myKey
            }
        }
    }

    loginRequest(email, senha){
        const data = {email, senha}
        return axios.post(`${this.baseUrl}/login`, data, this.config)
    }

    userData(user){

    }
}