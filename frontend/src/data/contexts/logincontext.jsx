'use client'
import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext({})

export function LoginProvider(props){
    const [logado, setLogado] = useState(false)
    const [usuario, setUsuario] = useState({nome:'', id:0})
    
    useEffect(() => {
        const data = window.localStorage.getItem('LOGADO_BOOL');
        if ( data !== null ) setLogado(JSON.parse(data));
    }, []);

    useEffect(() => {
        const data = window.localStorage.getItem('DADOS_LOGIN');
        if ( data !== null ) setUsuario(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('LOGADO_BOOL', JSON.stringify(logado));
      }, [logado]);

    useEffect(() => {
        window.localStorage.setItem('DADOS_LOGIN', JSON.stringify(usuario));
    }, [usuario]);

    return(
        <LoginContext.Provider value={{logado, setLogado, usuario, setUsuario}}>
            {props.children}
        </LoginContext.Provider>
    )
}