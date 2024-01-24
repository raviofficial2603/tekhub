import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'

function Logout() {
    const navigate=useNavigate()
    const usersContext=useContext(userContext)
    useEffect(()=>{
        axios.get('/logout').then(()=>{
            usersContext.toogleLogin(false)
            navigate('/')
            
        }).catch(err=>console.log(err))
    },[])
  return (
    <div>
        <h1> Logging out... </h1>
    </div>
  )
}

export default Logout
