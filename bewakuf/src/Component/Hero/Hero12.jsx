import { Center, Flex ,Heading,Image ,Box} from '@chakra-ui/react'
import React from 'react'
let links = [
    'https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-new-mugs-1673005212.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg',
    'https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png',
    'https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png'
]
const Hero12 = () => {
  return (
    <Box>
    <br />
    <Heading>CATEGORIES TO BAG</Heading>
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

export default Hero12
