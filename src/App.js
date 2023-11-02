import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import DriedFish from './components/Product/DriedFish/DriedFish';
import Fish from './components/Product/Fish/Fish';
import Fruit from './components/Product/Fruit/Fruit';
import Vegetable from './components/Product/Vegetable/Vegetable';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Ceo from './components/About/Ceo';
import Company from './components/About/Company';
import Enrolment from './components/About/Enrolment';
import Misiion from './components/About/Misiion';
import Organogram from './components/About/Organogram';
import Success from './components/About/Success';


const App = () => {
  return (
    <div>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/driedfish" element={ <DriedFish/>} /> 
        <Route path="/fruit" element={      <Fruit/>} /> 
        <Route path="/fish" element={ <Fish/>} /> 
        <Route path="/vegetable" element={    <Vegetable/>} /> 
        <Route path="/service" element={    <Service/>} /> 
        <Route path="/contact" element={         <Contact/>} /> 
        <Route path="/ceo" element={         <Ceo/>} /> 
         
        <Route path="/companyIn" element={         <Company/>} /> 
        <Route path="/enrolment" element={         <Enrolment/>} /> 
        <Route path="/mission" element={         <Misiion/>} /> 
        <Route path="/organ" element={         <Organogram/>} /> 
        <Route path="/success" element={        <Success/>} /> 
       
      
   
    
     
      
   

      </Routes>

     <Footer/>
    </div>
  );
};

export default App;
