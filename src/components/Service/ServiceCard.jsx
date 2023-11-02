import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = ({ serviceText, animation, icon }) => {
  return (
    <div className="bg-white hover:bg-gray-700 text-black hover:text-white rounded-lg shadow-6xl p-4 w-[420px] m-2" data-aos={animation}>
      <div className="flex items-center">
     <div>
      <span className=' flex justify-center items-center py-4'>
      <FontAwesomeIcon icon={icon} className="text-2xl" />

      </span>
        <p className='flex justify-center text-justify items-center py-4'>{serviceText}</p>
     </div>
      </div>
    </div>
  );
};

export default ServiceCard;
