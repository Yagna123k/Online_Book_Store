import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/ParentContext'


export default function Navbar() {

  const {search, setSearch} = useContext(AppContext)

  const inputChange = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="logo" />
        <h1>Kalvium Books</h1>
      </div>
      <div className='searchBar'>
        <p>🔍</p>
        <input type="text" onChange={inputChange} placeholder='Search Books'/>
      </div>
      <button className='register'>
        <Link to={'/register'}><p>Register</p></Link>
      </button>
    </div>
  )
}
