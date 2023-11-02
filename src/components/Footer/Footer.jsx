import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPhone, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you need

const Footer = () => {
  return (

      <footer className="mx-auto mt-16">
        <div className="">
          <div className="h-24 bg-gray-600 w-full flex items-center justify-center">
            <p className="text-2xl uppercase text-white">Important Links</p>
          </div>
          <div className="w-full bg-gray-800 flex flex-wrap justify-center gap-44 py-8">
            <ul className="">
              <li className="text-xl uppercase text-white">Synergic</li>
            </ul>
            <ul className="text-sm uppercase text-white">
              <h1 className="text-2xl">About us</h1>
              <li className="my-2 hover:text-blue-600 py-3"><a href="#">Ceo & managing director</a></li>
              <li className="my-2 hover:text-blue-600 py-3"><a href="#">Company Professional Certificate</a></li>
              <li className="my-2 hover:text-blue-600 py-3"><a href="#">Enrollment & membership</a></li>
              <li className="my-2 hover:text-blue-600 py-3"><a href="#">Company Introduction</a></li>
              <li className="my-2 hover:text-blue-600 py-3"><a href="#">Organogram</a></li>
              <li className="my-2 hover:text-blue-600 py-3"><a href="#">Success Stories</a></li>
            </ul>
            <ul className="text-sm uppercase text-white">
              <h1 className="text-2xl">Products</h1>
              <li className="my-2 hover:text-blue-600 py-1"><a href="fruit.html" className=" ">Fruit</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="vegitable.html" className="">Vegetable</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="driedFish.html" className=" ">Dried fish</a></li>
              <li className="my-2 hover:text-blue-600 py-1"><a href="fish.html" className=" ">Fish</a></li>
            </ul>
            <ul className="flex gap-8 text-white text-3xl justify-center">
      <li><FontAwesomeIcon icon={faFacebook} /></li>
      <li><FontAwesomeIcon icon={faInstagram} /></li>
   
   
    <li><FontAwesomeIcon icon={faFacebookMessenger} /></li>
    </ul>
          </div>
          <hr />
          <div className="h-24 flex items-center justify-center bg-gray-900">
            <p className="text-white text-sm uppercase">Designed By Digitezeio</p>
          </div>
        </div>
      </footer>
   
  );
}

export default Footer;
