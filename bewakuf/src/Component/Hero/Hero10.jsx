import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'
import 'swiper/css';
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Image} from '@chakra-ui/react';
let cardDeteals = [
    'https://images.bewakoof.com/uploads/grid/app/oversized-tee-new--1--1676901314.jpg',
    'https://images.bewakoof.com/uploads/grid/app/static-1x1-BTSlogo-01--1--1676714340.jpg',
    'https://images.bewakoof.com/uploads/grid/app/static-1x1-LimitedOffer-04-1676028999.jpg',
    'https://images.bewakoof.com/uploads/grid/app/full-sleeve-banner-2-1676443809.jpg',
    'https://images.bewakoof.com/uploads/grid/app/1x1Banner-GraphicBags-01-1676555256.jpg'
]
const Hero7 = () => {
    return (
        <div>
            <div className='container py-4 justify-content-center' >
                <Swiper
                    freeMode={!true}
                    grabCursor={!true}
                    modules={[FreeMode]}
                    slidesPerView={3}
                    spaceBetween={30}

                >

                  {cardDeteals.map((el)=>(
                    <SwiperSlide>
                    <Image src={el}/>
                    
                    </SwiperSlide>
                  ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Hero7
