import axios from "axios";

const baseUrl = 'http://localhost:3001'

export class ProductService {

    getProducts(){
        return axios.get(`${baseUrl}/products`)
    }

    async getProductById(id){
        return await axios.get(`${baseUrl}/products/${id}`)
    }
}
