import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  
  
    return (
<nav className="navbar navbar-expand-lg  py-2" >
  {/* Container wrapper */}
  <div className="container">
    {/* Navbar brand */}
    <Link className="navbar-brand me-2" to="/">
		Techno <span className='text-success'>GYM</span>
    </Link>
    {/* Toggle button */}
    <button className="navbar-toggler text-light" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
      </ul>
      {/* Left links */}
      <div className="d-flex align-items-center menu-items-mobile menu-items">
      <Link to="/" className='text-dark px-3'>Home</Link>
	  	<Link to="/programmes" className='text-dark px-3'>Programmes</Link>
        <Link to="/trainers" className='text-dark px-3'>Trainers</Link>
        <Link to="/about" className='text-dark px-3'>About</Link>
        <Link to="/Contact" className='text-dark px-3'>Contact</Link>
    	</div>
    </div>
    {/* Collapsible wrapper */}
  </div>
  {/* Container wrapper */}
</nav>


)



}
