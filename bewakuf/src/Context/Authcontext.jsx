import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

export const Authcontext=React.createContext();
const AuthcontextProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [isAuth,setisAuth] = useState(false);
    const [userName,setUserNmae] = useState('');
    let getUser = ()=>{
        axios.get('http://localhost:8080/user').then((res)=>{
            setUser(res.data);
        })
    }
    useEffect(()=>{
        getUser();
    },[])

    const menProductsTBottomWare ="menProductsTBottomWare";
    const menProductsTopWare ="menProductsTopWare";
    const menProductsWinter ="menProductsWinter";
    const womemenProductsTopWare ="womemenProductsTopWare";
   
    const login=(username)=>{
        setisAuth(true);
        setUserNmae(username)
    }
    const logout=(username)=>{
        setisAuth(false);
        setUserNmae('')
    }
  return (
    <Authcontext.Provider value={{user,login,logout,userName,isAuth,menProductsTBottomWare,menProductsTopWare,menProductsWinter,womemenProductsTopWare}}>
      {children}
    </Authcontext.Provider>
  )
}

export default  AuthcontextProvider;