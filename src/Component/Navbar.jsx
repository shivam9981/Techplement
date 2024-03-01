import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'
const Navbar = () => {
  return (
    <>
        <div className='nav-container'>
            <p className='p-tag'>CALCULATOR</p>
            <div className='nav-link'>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/history'>History</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar