import React from 'react'

import Carusole from '../carosole/Carusole'
import Product from '../Product/Product'


const Home = () => {
  return (
    <div>
   <div className='h-[100vh] bg-gray-600'>
   <Carusole/>
   </div>
    <Product/>

   
    </div>
  )
}

export default Home
