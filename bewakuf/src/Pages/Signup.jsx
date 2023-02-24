import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue

} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import { Authcontext } from '../Context/Authcontext';

export default function Signup() {
    //const { user } = useContext(Authcontext);
    const [showPassword, setShowPassword] = useState(false);
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const { firstname, lastname, email, password } = formState;


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === "number" ? Number(value) : value;
        setFormState({ ...formState, [name]: val })
    }
    // for(let i = 0;i<user.length;i++){

    // }
    //console.log(isRegister);
    const addUsers = (data = { firstname: '', lastname: '', email: '', password: '' }) => {
        return axios(
            {
                method: 'post',
                url: `http://localhost:9090/user`,
                data: data
            }
        )
    }
    // if(firstname === null || lastname===null || email===null || password===null){
    //     alert('Please Fill All The Field');
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers(formState);
        // for(let users of user){
           
        //     if(users.email===email){
        //         alert('taken')
        //         break;
        //     }else{
               
        //         alert('ok');
        //         break;
        //     }
        // }
        setFormState({
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        });
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" value={firstname} name="firstname" onChange={handleChange} />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" value={lastname} name="lastname" onChange={handleChange} />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" value={email} name="email" onChange={handleChange} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} value={password} name="password" onChange={handleChange} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    onClick={handleSubmit}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Link color={'blue.400'} to='/login'>Login</Link>
                                </Text>
                            </Stack>

                        </FormControl>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}