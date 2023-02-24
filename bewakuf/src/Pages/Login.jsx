import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
   
  } from '@chakra-ui/react';
import { useContext, useState } from 'react';
  import { Link, Navigate } from 'react-router-dom';
import { Authcontext } from '../Context/Authcontext';
  export default function Login() {
    const {user,login,isAuth} = useContext(Authcontext);
    const [formState,setFormState] = useState({
      email:'',
      password:''
    });
    const {email,password} = formState;
    const handleChange = (e) => {
      const { name, value, type } = e.target;
      const val = type === "number" ? Number(value) : value;
      setFormState({ ...formState, [name]: val })
  }
  const handleSubmit =()=>{
    console.log('Ratna');
    for(let i = 0;i<user.length;i++){
      if(user[i].email && user[i].password===password){
        login(user[i].firstname);
        break;
      }
    }
  }
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to='/' />
  }
    console.log(user);

    return (
        
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={email} onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={password} onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign in
                </Button>
              </Stack>
              <Text align={'center'}>
                 No Account <Link color={'blue.400'} to = '/signup'>Signup</Link>
                </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }