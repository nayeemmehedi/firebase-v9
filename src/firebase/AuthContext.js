import React, { createContext, useContext, useEffect, useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , onAuthStateChanged, signOut} from "firebase/auth";

import { auth } from './firebase';

export const AuthContext = createContext()



export function useAuth(){
    return useContext(AuthContext)
}






export default function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()


     function signin (auth,name,password){

      return  signInWithEmailAndPassword(auth, name, password)
            
    }
    
    
     function CREATE (auth,name,password){
    
      return  createUserWithEmailAndPassword(auth, name, password)
            
    }

    


    useEffect(() => {
        onAuthStateChanged(auth, (r)=>{
           setCurrentUser(r)
            
         })
        
      
    }, [])



    const value = {
        currentUser,
        signin,
        CREATE,
        


    }
   
   
  





    return (
        <AuthContext.Provider value={value} >

            {
                children
            }
            
        </AuthContext.Provider>
    )
}
