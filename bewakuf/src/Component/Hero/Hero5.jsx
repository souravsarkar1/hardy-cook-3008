import { Box, Center, Flex,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
let linksMen = [
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg',
    'https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg'
]
const Hero5 = () => {
  return (
    <Box>
    <Center m='auto'>
    <Flex w='100%'>
    <Link to='/men'>
    <Center m='auto'>
      {linksMen.map((el)=>(
       
        <Image src={el} />
      ))}
      </Center>
      </Link>
      </Flex>
      </Center>
    </Box>
  )
}

export default Hero5
