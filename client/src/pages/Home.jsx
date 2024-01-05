import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import { Slider } from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}

export default Home