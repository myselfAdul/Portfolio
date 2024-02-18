import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate() 
  return (

    <div className="header">
      <img onClick={()=>
      navigate('/')} src="/logo.png" alt="logo" height='100px' />
      <nav className='navigation'> 
          <NavLink to='/' className='nav-link' >Home</NavLink>
          <NavLink to='/contact' className='nav-link'>Contact</NavLink>
          <NavLink to='/blogs' className='nav-link'>Blogs</NavLink>
          <NavLink to='/projects' className='nav-link'>Projects</NavLink>
        </nav>
    </div>
      

      

    // <nav className='navigation'>
    //   <NavLink to='/' className='nav-link' >Home</NavLink>
    //   <NavLink to='/contact' className='nav-link'>Contact</NavLink>
    //   <NavLink to='/blogs' className='nav-link'>Blogs</NavLink>
    //   <NavLink to='/projects' className='nav-link'>Projects</NavLink>
    // </nav>
  )
}

export default Navbar

