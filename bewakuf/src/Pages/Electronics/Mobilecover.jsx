

//export default Mobilecover

 
import { Box, Center, Grid, GridItem, Image, Text, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import ProductCart from '../../Component/ProductComponent/ProductCart';
//hhttp://localhost:9090/Electronice

const Mobilecover = () => {
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 12;
  const getData = () => {
    axios.get(`http://localhost:9090/Electronice?_page=${page}&_limit=${limit}`).then((res) => {
      setLinks(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }
  useEffect(() => {
    getData();
  }, [page])
  return (
    <Box>
      <Center>
        <Grid templateColumns='repeat(3, 1fr)' gap={3} w='90%'>
          {links.map((el) => (

            <ProductCart
            id={el.id}
            img={el.img}
            title={el.title}
            price={el.price}
            originalprice={el.originalprice}
            rating={el.rating}
            />

          ))}
        </Grid>
      </Center>
      <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
        isDisabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        PREVIOUS
      </Button>
      <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
        isDisabled
      >
        {page}
      </Button>
      <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
        isDisabled={page === 5}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
      <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
        onClick={() => setPage(1)}
      >
        Reset
      </Button>
      <br />
      <br />
      <br />
    </Box>
  )
}

export default Mobilecover
 
 

