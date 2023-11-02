import React from 'react'
import './Header.css'
import DeksTopNav from './DeksTopNav'

const Header = () => {
  return (
    <div>
         <header class="fixed top-0 w-full  shadow-lg head-color">
      <nav class=" p-[15px]  bg-gray-900">
         <DeksTopNav/> 
    
          

    </nav>
 
  </header>
    </div>
  )
}

export default Header
