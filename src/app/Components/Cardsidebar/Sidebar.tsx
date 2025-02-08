import React from 'react'
import Bartwo from './Single Product/Bartwo'
import Details from '@/app/Shop/ProductDetails/page'
import Review from './Single Product/Review'
import Productcard from './Single Product/Productcard'


const Sidebar = () => {
  return (
    <div>
      <Bartwo/>
      <Details/>
      <Review />
    <Productcard />
      
    </div>
  )
}

export default Sidebar