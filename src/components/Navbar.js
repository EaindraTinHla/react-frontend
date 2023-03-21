import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hook/useLogout'
import { useAuthContext } from '../hook/useAuthContext';

function Navbar() {
  const {logout} = useLogout();
  const { user } = useAuthContext();
  const handleClick = () =>{
    logout();
  }
  return (
    <div className='container'>
       <nav className="navbar navbar-light bg-purple text-white">
          <Link to='/' className="navbar-brand text-white">React-Quiz</Link>
          {user && (
          <div>
            <span>{user.email}</span>
            <button className='btn btn-sm bg-purple text-white' onClick={handleClick}>Logout</button>
          </div>
          )}
          {!user && (
          <div>
          <Link to='/login' className='text-white mr-3'>login</Link>
          <Link to='/signup' className='text-white'>Signup</Link>
           </div>
           )}
           
          </nav>
    

    </div>
  )
}

export default Navbar