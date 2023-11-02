import React, { useState } from 'react';

const Mobil = () => {
  const [isSubMenu1Open, setSubMenu1Open] = useState(false);
  const [isSubMenu2Open, setSubMenu2Open] = useState(false);


  const toggleSubMenu1 = () => setSubMenu1Open(!isSubMenu1Open);
  const toggleSubMenu2 = () => setSubMenu2Open(!isSubMenu2Open);
  

  return (
    
   
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Home Menu Item */}
          <div className="relative group bg-gray-500 uppercase">
            <div className="uppercase  flex justify-center menu-item mt-3 text-white hover:bg-gray-300 hover:shadow-2xl hover:text-black  rounded-md px-3 py-2 text-base font-medium">
              <a href="#">Home</a>
            </div>
          </div>

          {/* About Us Menu Item with Submenu */}
          <div className="relative group uppercase">
            <div className="flex justify-center menu-item mt-3 bg-gray-500 text-white hover:bg-gray-300 hover:shadow-2xl hover:text-black  rounded-md px-3 py-2 text-base font-medium">
              <a href="#" onClick={toggleSubMenu1}>About Us</a>
            </div>

            {/* Submenu for About Us */}
            <ul className={`text-white p-4 ${isSubMenu1Open ? '' : 'hidden'} border-b-slate-200 text-center my-2 divide-y group-hover:border-b-blue-700`}>
              <li className="my-2 hover:text-blue-600 py-1"><a href="message.html">Ceo & managing director</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="enrolment.html">Company Professional Certificate: Enrollment & membership</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="mision.html">Mission & vision</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="companyIn.html">Company Introduction</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="organogram.html">Organogram</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="success.html">Success Stories</a></li>
            </ul>
          </div>

          {/* Products Menu Item with Submenu */}
          <div className="relative group uppercase">
            <div className="flex justify-center menu-item mt-3 bg-gray-500 text-white hover:bg-gray-300 hover:shadow-2xl hover:text-black  rounded-md px-3 py-2 text-base font-medium">
              <a href="#" onClick={toggleSubMenu2}>Products</a>
            </div>

            {/* Submenu for Products */}
            <ul className={`text-white p-4 ${isSubMenu2Open ? '' : 'hidden'} border-b-slate-200 text-center my-2 divide-y group-hover:border-b-blue-700`}>
              <li className="my-2 hover:text-blue-600 py-1"><a href="fruit.html">Fruit</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="vegetable.html">Vegetable</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="driedFish.html">Dried fish</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="fish.html">Fish</a></li>

          
            </ul>
        </div>
{/*     
        <!-- About Menu Item with Submenu --> */}
        <div class="relative group uppercase " onclick="dropDown('submenu3', 'arrow3')">
          <div class="uppercase  flex justify-center mt-3 bg-gray-500 menu-item text-white hover:bg-gray-300 hover:shadow-2xl hover:text-black  rounded-md px-3 py-2 text-base font-medium">
              <a
              href="#"
              class=""
              
            >Services</a>
           
             </div>
    
          {/* <!-- Submenu for About --> */}
        
    
        {/* <!-- Contact Menu Item --> */}
        <div class="flex justify-center menu-item uppercase mt-3 bg-gray-500 text-white hover:bg-gray-300 hover:shadow-2xl hover:text-black  rounded-md px-3 py-2 text-base font-medium">
          <a
          href="#"
          class=""
          
        >Contact</a>
       
         </div>
      </div>
    </div>

   
  )
}

export default Mobil
