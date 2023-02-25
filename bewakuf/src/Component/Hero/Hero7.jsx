import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'
import 'swiper/css';
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Text} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
let cardDeteals = [
    {img:'https://images.bewakoof.com/t320/women-pink-oversized-printed-dress-554162-1671775633-1.jpg' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%',to:'/women'},
    {img:'https://images.bewakoof.com/t320/men-s-ginger-root-solid-oversized-fit-t-shirt-552870-1672295637-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-purple-the-warrior-king-graphic-printed-oversized-t-shirt-565902-1672377608-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-black-metallica-oversized-fit-t-shirt-564902-1671801834-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/women-s-purple-harry-s-house-graphic-printed-oversized-t-shirt-565913-1672383811-1.jpg' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentican-oversized-full-sleeve-t-shirt-569063-1673612954-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/women-pink-oversized-printed-dress-554162-1671775633-1.jpg' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-ginger-root-solid-oversized-fit-t-shirt-552870-1672295637-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-purple-the-warrior-king-graphic-printed-oversized-t-shirt-565902-1672377608-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-black-metallica-oversized-fit-t-shirt-564902-1671801834-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/women-s-purple-harry-s-house-graphic-printed-oversized-t-shirt-565913-1672383811-1.jpg' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentican-oversized-full-sleeve-t-shirt-569063-1673612954-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
]
const Hero7 = () => {
    return (
        <div>
            <div className='container py-4 justify-content-center' >
                <Swiper
                    freeMode={!true}
                    grabCursor={!true}
                    modules={[FreeMode]}
                    slidesPerView={5}
                    spaceBetween={30}

                >
                <NavLink to='/women'>
                  {cardDeteals.map((el)=>(
                    <SwiperSlide>
                    <img src={el.img} alt={el.deteals} />
                    <Text>{el.deteals}</Text>
                    <Text color='green.600'>₹ {el.price}   {el.discount} discount</Text>
                    <Text textDecoration='line-through'>₹ {el.originalprice}</Text>
                    <Text textAlign='right' color='red'>Only Few Left</Text>
                    </SwiperSlide>
                  ))}
                  </NavLink>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero7
