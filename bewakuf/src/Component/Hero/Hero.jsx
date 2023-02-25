import { Heading } from '@chakra-ui/react'
import React from 'react'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import Hero5 from './Hero5'
import Hero6 from './Hero6'
import Hero7 from './Hero7'
import Hero8 from './Hero8'
import Hero9 from './Hero9'
import Hero10 from './Hero10'
import Hero11 from './Hero11'
import Hero12 from './Hero12'
import Hero13 from './Hero13'
import Hero14 from './Hero14'
import Hero15 from './Hero15'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div>
           <Link to='/men'> <Hero1 /></Link>
            <br />
            <Hero2 />
            <br />
            <br />
            <Hero3 />
            <Heading>DESIGNS OF THE WEEK</Heading>
            <Hero4 />
            <Hero5 />
            <Hero6 />
            <Hero7 />
            <Hero8 />
            <Hero9 />
            <Hero10 />
            <Hero11/>
            <Hero12/>
            <Hero13/>
            <br />
            <Hero14/>
            <br />
            <Hero15/>
        </div>
    )
}

export default Hero
