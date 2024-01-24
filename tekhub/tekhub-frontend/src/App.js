import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Error';
import Logout from './components/Logout';
import { createContext, useState } from 'react';

export const userContext=createContext();
function App() {
  const [login,setLogin]=useState(false);
  function toogleLogin(val){
    setLogin(val)
  }
  return (
    <div className="App">
      <userContext.Provider value={{loginStatus:login,toogleLogin:toogleLogin}} >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
