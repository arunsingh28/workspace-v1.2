import React,{useState,useEffect,createContext} from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// const Pic = createContext()

const Auth0 = () => {


    const {loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0()
    
    if(isLoading){
        return <p style={{textAlign:'center',fontSize:50,marginTop:60,fontFamily:'Arial'}}>Loding...</p>
    }
   
    return ( 
        isAuthenticated && (
        <>
        <button onClick={()=> logout() }>Logout</button>
        {/* {JSON.stringify(user,null,2)} */}
        {/* <Pic.Provider value={user.picture}></Pic.Provider> */}
        </>
        )
    
    )
}

export default Auth0
