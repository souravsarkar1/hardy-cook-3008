import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const links = [
  {to:'/men' , title : 'MEN'},
  {to:'/women' , title : 'WOMEN'},
  {to:'/other' , title : 'ACCESSORIES'},

]
const Navbar3 = () => {
  return (
    <div className='nav3'>
      {links.map((el)=>(
        <NavLink key={el.title} to={el.to}>{el.title}</NavLink>
      ))}
    </div>
  )
}

export default Navbar3
