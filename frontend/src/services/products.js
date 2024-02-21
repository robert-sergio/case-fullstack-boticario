import axios from "axios";

export class ProductService {

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

    getProducts(){
        return axios.get(`${this.baseUrl}/products`)
    }

    async getProductById(id){
        return await axios.get(`${this.baseUrl}/products/${id}`)
    }
}
