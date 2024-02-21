'use client'
import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext({})

export function LoginProvider(props){
    const [clientData, setClientData] = useState({message:'', cliente_id:'', nome:'', token:''})
    const {cliente_id, token, message, nome} = clientData
    
    useEffect(() => {
        const data = window.localStorage.getItem('CLIENTE_DATA');
        if ( data !== null ) setClientData(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('CLIENTE_DATA', JSON.stringify(clientData));
    }, []);

    function handleLogout(){
        setClientData({message:'', cliente_id:'', nome:'', token:''})
        window.localStorage.setItem('CLIENTE_DATA', JSON.stringify({message:'', cliente_id:'', nome:'', token:''}));
    }

    return(
        <LoginContext.Provider value={{clientData, setClientData, handleLogout, cliente_id, token, message, nome }}>
            {props.children}
        </LoginContext.Provider>
    )
}