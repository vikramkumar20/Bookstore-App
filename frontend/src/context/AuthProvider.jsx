// this is a Context API, this is created so that we can access our user login status anywhere in the webApp.
import React,{createContext, useContext} from 'react'
import { useState } from 'react';

export const AuthContext = createContext()
export default function AuthProvider({children}) {
  const initialAuthUser= localStorage.getItem("Users");
  const [authUser,setAuthUser]= useState(
    initialAuthUser? JSON.parse(initialAuthUser) : undefined
  )
  return(
    <AuthContext.Provider value= {[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}
// useAuth() is a hook created by us.
export const useAuth=()=> useContext(AuthContext);
