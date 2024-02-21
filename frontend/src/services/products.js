import axios from "axios";

export class ProductService {

    constructor(){
        this.baseUrl = 'http://localhost:3001'
    }

    getProducts(){
        return axios.get(`${this.baseUrl}/products`)
    }

    async getProductById(id){
        return await axios.get(`${this.baseUrl}/products/${id}`)
    }
}
