import { Box  , Center, Flex, Heading,Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero8 = () => {
  return (
    <Box>
      <Heading>TOO HOT TO BE MISSED</Heading>
      <Link to='/men'>
      <Flex>
      <Center m='auto'>
      <Image src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-b3at999-1676885542.jpg'/>
      <Image src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-b3at999-1676885542.jpg'/>
      </Center>
      </Flex>
      <Flex>
      <Center m='auto'>
      <Image src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-MEN-VEST-02-1676611750.jpg'/>
      <Image src='https://images.bewakoof.com/uploads/grid/app/MIdSizeBanner-TrendyToppers-1676223605.jpg'/>
      </Center>
      </Flex>
      </Link>
    </Box>
  )
}

export default Hero8
