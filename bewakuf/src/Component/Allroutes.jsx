import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Mobile from '../Pages/Electronics/Mobile'
import Mobilecover from '../Pages/Electronics/Mobilecover'
import Otherelecronics from '../Pages/Electronics/Otherelecronics'
import TvandLed from '../Pages/Electronics/TvandLed'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Bottomware from '../Pages/Men/Bottomware'
import Topware from '../Pages/Men/Topware'
import Topwarewomen from '../Pages/Women/Topware'
import Winter from '../Pages/Men/Winter'
import PrimeMember from '../Pages/PrimeMember'
import Signup from '../Pages/Signup'
import Bottomwarewomen from '../Pages/Women/Bottomware'
import Winterwomen from '../Pages/Women/Winter'
import Cart from '../Pages/Cart'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/primemember' element={<PrimeMember/>}></Route>
      <Route path='/mentopware' element={<Topware/>}></Route>
      <Route path='/menbottomware' element={<Bottomware/>}></Route>
      <Route path='/menwinter' element={<Winter/>}></Route>
      <Route path='/mobile' element={<Mobile/>}></Route>
      <Route path='/mobilecover' element={<Mobilecover/>}></Route>
      <Route path='/tv&led' element={<TvandLed/>}></Route>
      <Route path='/otherelectronics' element= {<Otherelecronics/>}></Route>
      <Route path='/womentopware' element={<Topwarewomen/>}></Route>
      <Route path='/womenbottomeware' element={<Bottomwarewomen/>}></Route>
      <Route path='/womenwinter' element={<Winterwomen/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path=''></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
