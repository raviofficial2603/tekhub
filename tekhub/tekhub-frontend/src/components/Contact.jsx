import { Box, FormControl, Input, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BusinessIcon from '@mui/icons-material/Business';
import axios from 'axios';

function Contact() {
  const [user,setUser]=useState({})
  useEffect(()=>{
    axios.get('/about').then(res=>setUser({name:res.data.name,email:res.data.email,phone:res.data.phone})).catch(err=>console.log(err)
    )}
  ,[])
  const handleChange=(e)=>{
    setUser((user)=>{return {...user,[e.target.name]:e.target.value}})
  }
  const submitHandler=()=>{
    axios.post('/contact',user).then(res=>alert("message sent")).catch(alert("something went wrong"))
  }
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col m-4 shadow-lg p-3 ">
            <div className="row">
              <div className="col">
                <PhoneAndroidIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="col">
                <h6>Phone</h6>
                <p>+91 9191919919</p>
              </div>
            </div>
          </div>
          <div className="col m-4 shadow-lg p-3">
            <div className="row">
              <div className="col">
                <EmailIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="col">
                <h6>Email</h6>
                <p>raviofficial26@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col m-4 shadow-lg p-3">
            <div className="row">
              <div className="col">
                <BusinessIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="col">
                <h6>Address</h6>
                <p>Guntur,Andrapradesh</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container shadow-lg w-75 py-4 mt-3">
        <h1>Get In Touch</h1>
        <Box sx={{ '& > :not(style)': { m: 3 } }}>
          <FormControl variant="standard">
            <Input
              id="input-with-icon-adornment"
              placeholder='Name'
              value={user.name}
              startAdornment={
                <InputAdornment position="start">
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <Input
              id="input-with-icon-adornment"
              placeholder='Email'
              className=''
              value={user.email}
              startAdornment={
                <InputAdornment position="start">
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <Input
              id="input-with-icon-adornment"
              placeholder='Phone'
              value={user.phone}
              className=''
              startAdornment={
                <InputAdornment position="start">
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          className='w-75'
          defaultValue=""
        />
          <button onClick={submitHandler} type="button" className="btn d-block mx-auto btn-dark mt-2 fw-bold">Submit</button>
        </Box>
      </div>
    </>
  )
}

export default Contact
