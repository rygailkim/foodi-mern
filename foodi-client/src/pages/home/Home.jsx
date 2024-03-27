import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import Service from './Service'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
      <Service/>
    </div>
  )
}

export default Home