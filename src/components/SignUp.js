import React, {useState} from 'react';
import { useSignup } from "../hook/useSignup";

const SignUp = () =>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const { signup, isloading, error } = useSignup();


const handleSubmit = async (e) =>{
  e.preventDefault()
  await signup(email, password)
}
    return(
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>Email:</label>
            <br/>
            <input
            type='email'
            onChange={(e) => setEmail(e.target.value) }
            value={email}
            />
            <br/>
             <label>Password:</label>
             <br/>
            <input
            type='password'
            onChange={(e) => setPassword(e.target.value) }
            value={password}
            />
            <br/>
            <br/>
            <button className='btn btn-sm bg-purple text-white' disabled={isloading}>Sign Up</button>
            { error && <div className='text-danger'>{error}</div>}
        </form>
    )
}
export default SignUp