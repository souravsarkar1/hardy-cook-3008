import { Center, Flex ,Image ,Text} from '@chakra-ui/react'
import React from 'react'
let links = [
    {img:'https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-bestsellers-1676881692.jpg',title:'Bestsellers'},
    {img:'https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-new-arrivals-1674817171.jpg',title:'New Arrival'},
    {img:'https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg',title:'Hot Deals'},
    {img:'https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg',title:'Official Collaborations'},
    {img:'https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg',title:'Vote for Designs'},
    {img:'https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg',title:'Last Sizes Left'},
    {img:'https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg',title:'Plus Size'},
    {img:'https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg',title:'Customization'},
]
const Hero3 = () => {
  return (
    <Flex w='90%' m='auto'>
    <Center m='auto'>
      {links.map((e)=>(
        <Flex direction='column'>
        <Image src={e.img} alt={e.title} />
        <Text>{e.title}</Text>
        </Flex>
      ))}
      </Center>
    </Flex>
  )
}

export default Hero3
