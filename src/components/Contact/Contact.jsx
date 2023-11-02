import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaLink } from 'react-icons/fa'; // Import the Font Awesome icons


const Contact = () => {
  return (
    <div>
             <section class="text-lg w-full bg-white h-auto p-10 flex justify-center mt-[93px] ">
            <div class="text-gray-900 mt-8 lg:w-[700px] shadow-xl  rounded-lg w-full">
                <h1 class="text-center text-4xl font-bold text-blue-600">M/s. Synergic</h1>
                <h2 class="py-2 flex gap-2 justify-center items-center">A Business House of EPC Works, Export, Import, Supply Chain of Fish & Commodities</h2>
                <p class="py-2 flex gap-2 justify-center items-center"><FaMapMarkerAlt className="text-blue-600" /> 84, Road # 10/1, Block # D, Gulshan, Niketon, Gulshan-1, Dhaka, Bangladesh</p>
                <p class="py-2 flex gap-2 justify-center items-center"><FaPhone className="text-blue-600" /> +8801317803060, 01317803070</p>
                <p class="py-2 flex gap-2 justify-center items-center"><FaPhone className="text-blue-600" /> +8802-222262993; +8802222260730, +8801846777788</p>
                <p class="py-2 flex gap-2 justify-center items-center"><FaEnvelope className="text-blue-600" /> info@synergicbd.com; synergic.anwar@gmail.com</p>
                <p class="py-2 flex gap-2 justify-center items-center"><FaFax className="text-blue-600" /> +8802-222285202</p>
                
               
                <div class="text-center mt-8">
                    <p class="py-2 font-bold text-2xl text-blue-600">Overseas Office of Synergic</p>
                    <span class="text-lg">M/s. Synergic, Canada LLC</span>
                    <p class="py-1 font-semibold"><i class="fas fa-map-marker-alt text-blue-600"></i> 6593 Salish Drive</p>
                    <p class="py-1 font-semibold"><i class="fas fa-map-marker-alt text-blue-600"></i> Vancouver V64E3, Canada</p>
                    <p class="py-1"><i class="fas fa-phone text-blue-600"></i> +1(236) 978-4863 (WhatsApp)</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
