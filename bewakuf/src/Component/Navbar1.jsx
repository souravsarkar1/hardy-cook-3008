import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const links = [
    {to:'/offer', title : 'Offer'},
    {to:'/fanbook', title : 'Fanbook'},
    {to:'/https://www.bewakoof.com/campaign/apps', title : 'Download app'},
    {to:'/primemember', title : 'Prime Member'},
    {to:'/contact', title : 'Contact Us'},
]

const Navbar1 = () => {
  return (
    <div className='nav1'>
    {links.map((el)=>(

     <NavLink key={el.title} to={el.to}>{el.title}</NavLink>
    ))}
    </div>
  )
}

export default Navbar1
