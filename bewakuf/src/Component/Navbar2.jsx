import React from 'react'
import { NavLink } from 'react-router-dom';
import { Input } from '@chakra-ui/react'
const links = [
    {to:'/men', title : 'Men'},
    {to:'/women', title : 'Women'},
    {to:'/electronics', title : 'Electronics'},
    
]
const Navbar2 = () => {
  return (
    <div>
      <div className='nav2'>
      <div className='nav21'>
        {links.map((el)=>(
            <NavLink key={el.title} to={el.to}>{el.title}</NavLink>
        ))}
      </div>
      <div className='nav22'>
      <Input placeholder='Basic usage' />
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
      <h3>Country</h3>
      </div>
      </div>
    </div>
  )
}

export default Navbar2
