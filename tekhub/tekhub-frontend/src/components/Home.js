import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
  const [userName,setUserName]=useState("")
  useEffect(()=>{
    axios.get('/about').then(res=>setUserName(res.data.name)).catch(err=>console.log(err))
  })
  return (
    <div className='home-body'>
      <div className="div">
      <p className='fw-bolder'>WELCOME </p>
      <h1>{userName}</h1>
      <h2>We are the Freelancers</h2>
      </div>
    </div>
  )
}

export default Home
