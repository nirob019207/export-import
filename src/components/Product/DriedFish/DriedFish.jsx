import React from 'react'
import DriedFishCard from './DriedFishCard'
import image1 from "../../image/1.png"
import image2 from "../../image/2.png"

import image3 from "../../image/76.jpg"
import image4 from "../../image/23.jpg"


const DriedFish = () => {
  return (
    <div>
          <section class=" w-full bg-whtie h-auto p-10 flex  justify-center  border-black mt-[100px]">
      <div>
        <h1 class="text-center text-4xl py-3 uppercase font-bold mb-10"><span class="text-gray-600"></span> <span class="text-gray-700">Dried Fish</span></h1>




        <div class="flex flex-wrap justify-center items-center gap-24">
          
          <DriedFishCard imageUrl={image4} title="Selmon" link="#"/>
          <DriedFishCard imageUrl={image3} title="pangas" link="#"/>
          <DriedFishCard imageUrl={image1} title="taki" link="#"/>
          <DriedFishCard imageUrl={image1} title="karpiu" link="#"/>
          

        </div>
      </div>

    </section>
    </div>
  )
}

export default DriedFish
