
import { createContext, useContext, useState } from "react"

import {users} from 'data/usersData/Users.data'
import { IAuth, IAuthContext  } from "interfaces/IAuth";
import Router from "routes/Router";

const myContext = createContext<IAuthContext | null>(null);


export const AuthData = () => useContext(myContext);


export const AuthWrapper = () => {

  const [user, setUser] = useState(
    {
      name: '',
      isAuth: false,
    }
  )

  const login = async ({username, password}:IAuth) =>{

    try{
      const userProfile = users.find(user => user.username === username)

      if (userProfile){
        if (userProfile.password === password){
          setUser({
            name: username,
            isAuth: true,
          })
          
        }
        else {
          console.log('Inorrect password')
        }
      }
      else {
        console.log('User not found');
      }
    }
    catch (error){
      console.log(error);
    }
  }

  const logout = async () =>{

    setUser({...user, isAuth: false})
  }


  return (
    <myContext.Provider value={{user, login, logout}}>

      <Router/>

    </myContext.Provider>
  )
}