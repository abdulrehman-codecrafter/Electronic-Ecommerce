import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Shop from "./Shop"
import Header from '../../components/Header'
import FooterComponent from '../../components/Footer'
export default function Frontened() {
  return (
    <>
      <Header />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="shop/*" element={<Shop />}/>
    </Routes>
      <FooterComponent />
    </>
  )
}
