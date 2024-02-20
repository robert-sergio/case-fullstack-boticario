'use client'
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export function CartProvider(props){
    const [ cartList, setCartList ] = useState([])
    const [ totalCart, setTotalCart ] = useState(0)
    const [ totalItens, setTotalItens ] = useState(0)

    useEffect(()=>{
        const tot = cartList.reduce( ( sum , cur ) => sum + Number(cur.produto.preco_produto)*cur.qtd_produto_pedido , 0)
        setTotalCart(tot)

        const itens = cartList.reduce( ( sum , cur ) => sum + Number(cur.qtd_produto_pedido) , 0)
        setTotalItens(itens)
    },[cartList])

    function handleCartList(produto, operation='', qty=1){
        const itemAtual = cartList.find((item) => item.produto.produto_id === produto.produto_id) ?? { qtd_produto_pedido: 0, produto }
        const novoItem = operation === 'add'?
            { ...itemAtual, qtd_produto_pedido: itemAtual.qtd_produto_pedido + qty } :
            { ...itemAtual, qtd_produto_pedido: itemAtual.qtd_produto_pedido - qty }

        const outrosItens = cartList.filter((item) => item.produto.produto_id !== produto.produto_id)
        setCartList([...outrosItens, novoItem])
    }

    // useEffect(() => {
    //     const data = window.localStorage.getItem('PRODUCT_LIST');
    //     if ( data !== null ) setCartList(JSON.parse(data));
    // }, []);

    // useEffect(() => {
    //     window.localStorage.setItem('PRODUCT_LIST', JSON.stringify(cartList));
    // }, [cartList]);

    return(
        <CartContext.Provider value={{ cartList, setCartList, totalCart, totalItens, handleCartList }}>
            {props.children}
        </CartContext.Provider>
    )
}