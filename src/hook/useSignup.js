import { useState } from "react";
import { useAuthContext } from "./useAuthContext";




export const useSignup = () =>{
    const [ error, setError] = useState(null);
    const [ isloading , setIsloading ] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async(email, password) =>{
        setIsloading(true)
        setError(null)


    const response = await fetch('http://localhost:5000/api/user/signup', {
        method:"POST",
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({email, password})
    })

    
    const json = await response.json()

    if(!response.ok){
        setIsloading(false);
        setError(json.error)
    }
    if(response.ok){
        //save to user to local storage
        localStorage.setItem('user', JSON.stringify(json))

        //update the auth content //
        dispatch({ type:"LOGIN", payload: json})

        setIsloading(false);
    }
    }

    return { signup, isloading, error } 
}