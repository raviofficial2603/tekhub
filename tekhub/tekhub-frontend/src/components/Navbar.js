import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import icon from '../components/images/icon.JPG'
import { userContext } from '../App'

function Navbar() {
  const usersContext=useContext(userContext)
  console.log(usersContext)
  return (
    <div className='fw-bolder'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 text-info">
  <div className="container-fluid rounded-pill p-0 m-0">
    <Link className="navbar-brand rounded-pill p-0 m-0" to="/">
        <img src={icon} alt="icon" className='p-0 m-0' width="120px"  />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-info">
        
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item ">
          {!usersContext.loginStatus ?<Link className="nav-link " to="/login">Login</Link>
          :<Link className="nav-link " to="/logout">Logout</Link>}
        </li>
        <li className="nav-item">
        {!usersContext.loginStatus && <Link className="nav-link " to="/register">Register</Link>}
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
