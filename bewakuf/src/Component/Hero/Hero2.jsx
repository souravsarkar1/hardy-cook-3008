import { Box ,Center,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero2 = () => {
  return (
    <Box m='auto'>
    <Center m='auto'>
    <Link to='/women'>
      <Image m='auto' src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg'/>
      </Link>
      </Center>
    </Box>
  )
}

export default Hero2
