import React from 'react'

import image1 from "../../image/1.png"
import image2 from "../../image/2.png"

import image3 from "../../image/76.jpg"
import image4 from "../../image/23.jpg"
import FishCard from './FishCard'


const Fish = () => {
  return (
    <div>
          <section class=" w-full bg-whtie h-auto p-10 flex  justify-center  border-black mt-[100px]">
      <div>
        <h1 class="text-center text-4xl py-3 uppercase font-bold mb-10"><span class="text-gray-600"></span> <span class="text-gray-700"> Fish</span></h1>




        <div class="flex flex-wrap justify-center items-center gap-24">
          
          <FishCard imageUrl={image4} title="Selmon" link="#"/>
          <FishCard imageUrl={image3} title="pangas" link="#"/>
          <FishCard imageUrl={image1} title="taki" link="#"/>
          <FishCard imageUrl={image1} title="karpiu" link="#"/>
          

        </div>
      </div>

    </section>
    </div>
  )
}

export default Fish
const services = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];