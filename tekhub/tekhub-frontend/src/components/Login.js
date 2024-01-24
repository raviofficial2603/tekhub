import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import HttpsSharpIcon from '@mui/icons-material/HttpsSharp';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Home from './Home';
import { userContext } from '../App';
function Login() {
  const navigate=useNavigate()
  const usersContext=useContext(userContext)
  console.log(typeof(usersContext.toogleLogin))
  useEffect(()=>{
    axios.get('/logout').then(()=>{
      usersContext.toogleLogin(false)
  }).catch(err=>console.log(err))
  },[])
  const [credential,setCredential]=useState({
    email:'',
    password:''
  })
  const handleChange=(e)=>
  {
    setCredential((credential)=>{
      console.log(credential)
      return {...credential,
        [e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit=()=>{
    axios.post("/signin", {
        ...credential
      })
      .then((response) => {
        console.log(response)
        if(response.status===201){
          usersContext.toogleLogin(true)
          alert("logged in successfully!")
          navigate('/')
        }
        else if(response.status===400){
          alert("something unsuccessfully!")
        }
        else{
          alert("login failed!!")
        }
      }).catch(err=>console.log(err));
  
  }
  return (
    !usersContext.loginStatus?<div>
      <div className="card my-5 w-75 py-5 mx-auto shadow-lg" >
        <div className="row g-0">
          <div className="col-md-5">
            <div className="card-body pt-5">
              <h2 className="card-title">Login</h2>
              <Box sx={{ '& > :not(style)': { m: 3 } }}>
                <FormControl variant="standard">
                  <Input
                    id="input-with-icon-adornment"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: 'primary.dark' }}/>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="standard">
                  <Input
                    id="input-with-icon-adornment"
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    className=''
                    startAdornment={
                      <InputAdornment position="start">
                        <HttpsSharpIcon sx={{ color: 'primary.dark' }}/>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <button type="button" onClick={handleSubmit} className="btn btn-dark mt-2 fw-bold d-block mx-auto">Submit</button>
              </Box>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" className=" rounded-start w-75" alt="..." />
            <div className='mt-3'>No account yet? <Link to='/register' className='btn btn-success btn-sm'>Sign up</Link></div>
          </div>
        </div>
      </div>
    </div>:<Home/>
  )
}
export default Login
