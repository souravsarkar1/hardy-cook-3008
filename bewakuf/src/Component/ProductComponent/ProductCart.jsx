import { Box, Center, Grid, GridItem, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
const ProductCart = ({ id, img, title, price, originalprice, rating }) => {
    return (
        <Box>
            <Center>
                <RouterLink to={`/products/${id}`}>
                    <GridItem key={id}>
                        <Image src={img} w='50%' m='auto' />
                        <Text>{title}</Text>
                        <Text color='green.500'>₹ {price}</Text>
                        <Text textDecoration='line-through'>₹ {originalprice}</Text>
                        <Text>Save {Number(originalprice) - Number(price)} 😂</Text>
                        <Text>Rating {rating}</Text>
                    </GridItem>
                </RouterLink>
            </Center>
        </Box>
    )
}

export default ProductCart
