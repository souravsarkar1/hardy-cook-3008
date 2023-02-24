import { Box ,Center,Flex,Image} from '@chakra-ui/react'
import React from 'react'
let links = [
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-ovrszd-w-1676463439.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-women-1673010262.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-w-dresses-1675144062.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-boyfriend-tees-1675319582.jpg'
]
const Hero6 = () => {
  return (
    <Box>
    <Flex>
    <Center m='auto'>
    {links.map((el)=>(
        <Image src={el}/>
    ))}
    </Center>
    </Flex>
    </Box>
  )
}

export default Hero6
