import { Flex } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
function Hero1() {
    return (
        <Carousel>
            <Carousel.Item>
            <Flex>
                <img 
                    id='hero1img'
                    className="d-block w-100"
                    src="https://images.bewakoof.com/uploads/grid/app/1x1-jumbo-prints-common-02-1677000028.jpg"
                    alt="First slide"
                />
                <img 
                    id='hero1img'
                    className="d-block w-100"
                    src="https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentacion-graphic-printed-oversized-zipper-hoodie-568931-1673943796-1.jpg"
                    alt="First slide"
                />
                </Flex>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
           
            >
                <Flex>
                <img
                id='hero1img'
                    className="d-block w-100"
                    src="https://images.bewakoof.com/uploads/grid/app/static-1x1-Polo-01-1677000030.jpg"
                    alt="Second slide"
                />
                <img
                id='hero1img'
                    className="d-block w-100"
                    src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-b3at999-1676885542.jpg"
                    alt="Second slide"
                />
                </Flex>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item 
           
            >
            <Flex>
                <img
                id='hero1img'
                    className="d-block w-100"
                    src="https://images.bewakoof.com/uploads/grid/app/1x1-tshirt-dresses-1677000030.jpg"
                    alt="Third slide"
                />
                <img
                id='hero1img'
                    className="d-block w-100"
                    src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1674483112.jpg"
                    alt="Third slide"
                />
                </Flex>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
           
            >
            <Flex>
            <img
                className="d-block w-100"
                id='hero1img'
                src="https://images.bewakoof.com/uploads/grid/app/joggers--1--1676971650.jpg"
                alt="First slide"
            />
            <img
                className="d-block w-100"
                id='hero1img'
                src="https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg"
                alt="First slide"
            />
            </Flex>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default Hero1;