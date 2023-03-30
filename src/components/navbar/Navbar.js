import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
   <header>
    <div className='container'>
    <Link to='/'><h1>Blog</h1></Link>
      <nav>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/create'><h4>Create post</h4></Link>
      </nav>
    </div>
   </header>
  )
}

export default Navbar