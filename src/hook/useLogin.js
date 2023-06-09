import { useState } from "react";
import { useAuthContext } from "./useAuthContext";




export const useLogin = () =>{
    const [ error, setError] = useState(null);
    const [ isloading , setIsloading ] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async(email, password) =>{
        setIsloading(true)
        setError(null)


    const response = await fetch('https://react-quiz.onrender.com/api/user/login', {
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

    return { login, isloading, error } 
}