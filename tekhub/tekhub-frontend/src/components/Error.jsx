import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <img className='w-75 d-block mx-auto' src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" alt="" />
      <Link to='/' className='btn btn-success'>Return to Home</Link>
    </div>
  )
}

export default Error
