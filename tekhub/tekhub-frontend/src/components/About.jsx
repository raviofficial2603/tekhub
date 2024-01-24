import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function About() {
  const [user,setUser]=useState({})
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('/about').then(res=>setUser(res.data)).catch(err=>{console.log(err)
      navigate('/login')
    })
  }
  ,[])
  
  
  return (
    <div>
      <div className="container shadow-lg mt-5 p-5">
        <div className="row text-start">
          <div className="col-md-4">
            <img className='mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegouWjeS9e1_fACuI4oWxW2zWaAXxYKJMOg&usqp=CAU" alt="" />
          </div>
          <div className="col-md-6">
            <h3>Tezravi</h3>
            <p>Software Developer</p>
            <p>Ranking: 1/10</p>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profile</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Timeline</button>
              </li>

            </ul>
          </div>
          <div className="col-md-2">
            <button className='btn btn-secondary'>Edit profile</button>
          </div>
        </div>
        <div className="row text-start mt-3">
          <div className="col-md-4 ">
            <ul type='none' className='p-0 mt-3'>
              <li><Link to='' className='text-decoration-none'>Youtube</Link></li>
              <li><Link to='' className='text-decoration-none'>Twitter</Link></li>
              <li><Link to='' className='text-decoration-none'>Instagram</Link></li>
              <li><Link to='' className='text-decoration-none'>Telegram</Link></li>
              <li><Link to='' className='text-decoration-none'>Facebook</Link></li>
            </ul>
          </div>
          <div className="col-md-6">
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <table class="table caption-top">
                  <tbody>
                    <tr>
                      <th scope="row">User Id</th>
                      <td>{user._id}</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">Name</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row">Profession</th>
                      <td>{user.work}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                <ul type='none' className='p-0 mt-3'>
                  <li><Link to='' className='text-decoration-none'>Youtube</Link></li>
                  <li><Link to='' className='text-decoration-none'>Twitter</Link></li>
                  <li><Link to='' className='text-decoration-none'>Instagram</Link></li>
                  <li><Link to='' className='text-decoration-none'>Telegram</Link></li>
                  <li><Link to='' className='text-decoration-none'>Facebook</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
