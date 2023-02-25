import { Center, Flex ,Heading,Image ,Box} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
let links = [
    'https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-1672915210.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png'
]
const Hero9 = () => {
  return (
    <Box>
    <br />
    <Heading>CATEGORIES TO BAG</Heading>
    <Flex>
    <Link to='/men'>
    <Center m='auto'>
   
    {links.map((el)=>(
        <Image src={el}/>
    ))}
    </Center>
    </Link>
    </Flex>
    </Box>
  )
}

export default Hero9
