import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Mobile from '../Pages/Electronics/Mobile'
import Mobilecover from '../Pages/Electronics/Mobilecover'
import Otherelecronics from '../Pages/Electronics/Otherelecronics'
import TvandLed from '../Pages/Electronics/TvandLed'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Topwarewomen from '../Pages/Women/Topware'
import PrimeMember from '../Pages/PrimeMember'
import Signup from '../Pages/Signup'
import Bottomwarewomen from '../Pages/Women/Bottomware'
import Winterwomen from '../Pages/Women/Winter'
import Cart from '../Pages/Cart'
import Men from '../Pages/Men/Men'
import Women from '../Pages/Women/Women'
import MenTopwareSinglePage from '../Pages/SingleProduct/MenTopwareSinglePage'
import MenBottomwareSingle from '../Pages/SingleProduct/MenBottomwareSingle'

const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/primemember' element={<PrimeMember/>}></Route>
      <Route path='/mobile' element={<Mobile/>}></Route>
      <Route path='/mobilecover' element={<Mobilecover/>}></Route>
      <Route path='/tv&led' element={<TvandLed/>}></Route>
      <Route path='/otherelectronics' element= {<Otherelecronics/>}></Route>
      <Route path='/womentopware' element={<Topwarewomen/>}></Route>
      <Route path='/womenbottomeware' element={<Bottomwarewomen/>}></Route>
      <Route path='/womenwinter' element={<Winterwomen/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/men' element={<Men/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/products/:id' element={<MenTopwareSinglePage/>}></Route>
      <Route path='/products/:id' element={<MenBottomwareSingle/>}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
