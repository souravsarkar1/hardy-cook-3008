import React from 'react'
import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Hero4 = () => {
  return (
    <Box>
    <Center m='auto'>
    <Flex alignItems='center' marginLeft={40}>
    <Link to='/men'>
    <Image src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1676955702.jpg'/>
    </Link>
    <Link to='women'>
    <Image src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1676955702.jpg'/>
    </Link>
    </Flex>
    </Center>
    </Box>
  )
}

export default Hero4
