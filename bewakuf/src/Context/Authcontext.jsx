import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const Authcontext=React.createContext();
const AuthcontextProvider = ({children}) => {
   const [user,setUser] = useState([]);
    const [isAuth,setisAuth] = useState(false);
    const [token,setToken] = useState('');
    let getUser = ()=>{
        axios.get('http://localhost:8080/user').then((res)=>{
            setUser(res.data);
        })
    }
    useEffect(()=>{
        getUser();
    },[])
  return (
    <Authcontext.Provider value={{isAuth,token,user}}>
      {children}
    </Authcontext.Provider>
  )
}

export default  AuthcontextProvider;