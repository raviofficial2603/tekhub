import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
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
import Home from './Home';
import { userContext } from '../App';
function Signup() {
  useEffect(()=>{
    axios.get('/logout').then(()=>{
      usersContext.toogleLogin(false)
  }).catch(err=>console.log(err))
  },[])
  const navigate=useNavigate()
  const usersContext=useContext(userContext)
  const [user,setUser]=useState({
    name:'',
    email:'',
    phone:'',
    work:'',
    password:'',
    cpassword:''
  })
  const handleChange=(e)=>
  {
    setUser((user)=>{
      console.log(user)
      return {...user,
        [e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit=()=>{
    axios
      .post("/signup", {
        ...user
      })
      .then((response) => {
        if(response.status===201){

          alert("Registered successfully!")
          navigate('/login')
        }
        else{
          alert("Registration failed!!")

        }
        console.log(response)
      }).catch(err=>console.log("something went wrong"));
  
  }
  return (
    !usersContext.loginStatus?<div>
      <div className="card my-5 w-75 py-3 mx-auto shadow-lg" >
        <div className="row g-0">
          <div className="col-md-8">
            <img src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" className="img-fluid rounded-start" alt="..." />
            Already registered? <Link to='/login' className='btn btn-success btn-sm'>Login</Link>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h2 className="card-title">Sign Up</h2>
              <Box sx={{ '& > :not(style)': { m: 1.5 } }}>
                <FormControl variant="standard">
                  
                  <Input
                    id="input-with-icon-adornment"
                    placeholder='Name'
                    name='name'
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: 'primary.dark' }}/>
                      </InputAdornment>
                    }
                  />
                </FormControl>
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
                    placeholder='Mobile'
                    name='phone'
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <CallSharpIcon sx={{ color: 'primary.dark' }} />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="standard">
                  
                  <Input
                    id="input-with-icon-adornment"
                    placeholder='Profession'
                    name='work'
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <WorkSharpIcon sx={{ color: 'primary.dark' }}/>
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
                <FormControl variant="standard">
                  
                  <Input
                    id="input-with-icon-adornment"
                    placeholder='Confirm Password'
                    name='cpassword'
                    onChange={handleChange}
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
        </div>
      </div>
    </div>:<Home/>
  )
}

export default Signup
