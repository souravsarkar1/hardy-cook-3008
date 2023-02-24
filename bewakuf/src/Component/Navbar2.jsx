import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Text, Input, Flex,Image } from '@chakra-ui/react'
import { Authcontext } from '../Context/Authcontext';
const links = [
    {to:'/men', title : 'Men'},
    {to:'/women', title : 'Women'},
    {to:'/electronics', title : 'Electronics'},
    
]
const Navbar2 = () => {
  const {isAuth , userName} = useContext(Authcontext);
  return (
    <div>
      <div className='nav2'>
      <Flex className='nav21'>
      <NavLink to='/'><Image width='150px' height='30px' src='https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/332690037_1407058510123342_4409956409915099566_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9r427dQ0iZQAX9Lut8i&_nc_ht=scontent.fccu16-1.fna&oh=00_AfBE-Inm71FyP9VKJL2K5Q8TFi9VIYKsOSNMmwEK4eaTEg&oe=63FB38CE'/></NavLink>
        {links.map((el)=>(
            <NavLink key={el.title} to={el.to}>{el.title}</NavLink>
        ))}
      </Flex>
      <div className='nav22'>
      <Input placeholder='Basic usage' />
     {isAuth ? <Text>{userName}</Text> :  <NavLink to='/login'>Login</NavLink>}
      <NavLink to='/cart'>Cart</NavLink>
      <h3>Country</h3>
      </div>
      </div>
    </div>
  )
}

export default Navbar2
