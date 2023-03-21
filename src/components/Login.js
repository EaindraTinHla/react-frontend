import React, {useState} from 'react';
import { useLogin } from '../hook/useLogin';

const Login = () =>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { login, isloading, error } = useLogin();
const handleSubmit = async (e) =>{
  e.preventDefault()
  await login(email, password)
}
    return(
        <form className='login' onSubmit={handleSubmit}>
            <h3>Login</h3>
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
         <button className='btn btn-sm bg-purple text-white' disabled={isloading}>Login</button>
            {error && <div className='text-danger'>{error}</div>}
        </form>
    )
}
export default Login