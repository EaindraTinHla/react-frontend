import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/SignUp'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />} //element={<Home />}
            />
             <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;