import axios from "axios";

export class OrderService{

    constructor(){
        this.baseUrl = 'http://localhost:3001'
    }

    createOrder(order, token){
        const config = {
            headers:{
            'Content-Type': 'application/json',
            'x-api-key': token
            }
        }
        console.log(order)
        return axios.post(`${this.baseUrl}/order`, order, config)
    }

    getOrders(cliente_id, token){
        const config = {
            headers:{
            'Content-Type': 'application/json',
            'x-api-key': token
            }
        }
        return axios.get(`${this.baseUrl}/orders/${cliente_id}`, config)
    }

    cancelOrder(pedido_id, token){
        const config = {
            headers:{
            'Content-Type': 'application/json',
            'x-api-key': token
            }
        }
        const data = {'status':false}
        return axios.put(`${this.baseUrl}/order/${pedido_id}`, data, config)
    }

    deleteOrder(pedido_id, token){
        const config = {
            headers:{
            'Content-Type': 'application/json',
            'x-api-key': token
            }
        }
        return axios.delete(`${this.baseUrl}/order/${pedido_id}`, config)
    }
}