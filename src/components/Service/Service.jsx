import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from './ServiceCard';
import {
  faBriefcase,
  faCog,
  faWrench,
  faLaptop,
  faHammer,
  faIndustry,
  faTruck,
  faBolt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  // Define the list of services with individual animations and icons
  const services = [
    { text: "Technical Consultancy Service for Oil & Gas, New Mine Project", animation: "fade-up", icon: faBriefcase },
    { text: "All kinds of Civil Works including sand filling & steel structure2", animation: "fade-left", icon: faCog },
    { text: "All kinds of electrical substation, cabling, electrical pole, tower, control panel transmission and distributions line", animation: "fade-right", icon: faWrench },
    { text: "Erection & Installation of Plant Equipment", animation: "fade-down", icon: faLaptop },
    { text: "Fabrications & Installation of Plant Piping5", animation: "flip-up", icon: faHammer },
    { text: "Fabrications & Installation of Steel Structure including supply of Materials", animation: "flip-down", icon: faIndustry },
    { text: "Re-Tubing Work of Plants / Vessels including supply of materials. Rehabilitation of Plant Equipment and Valves etc.", animation: "zoom-in", icon: faTruck },
    { text: "Insulation Works including supply of material", animation: "zoom-out", icon: faBolt },
    { text: "Supply of Qualified & Experienced Workforce and Equipment’s", animation: "fade-up", icon: faUsers },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element when the animation starts
    });
  }, []);

  return (
    <div>
      <section className="mt-[93px] bg-gray-200 py-4">
        <div className="h-24 bg-gray-600 w-full flex items-center justify-center">
          <p className="text-2xl uppercase text-white">Our Services</p>
        </div>
        <div className="bg-transparent shadow-2xl my-3 p-4 lg:mx-44 mx-8 pb-4">
          <div className="py-8 px-4 text-black text-xl">
            <ul className="flex flex-wrap justify-center">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  serviceText={service.text}
                  animation={service.animation}
                  icon={service.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
