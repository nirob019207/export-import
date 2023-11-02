import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from "../image/1.png";
import image2 from "../image/2.png";
import image3 from "../image/76.jpg";
import image4 from "../image/7.jpg";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element when the animation starts
    });
  }, []);

  return (
    <div>
      <section className="w-full bg-white h-auto p-10 flex justify-center border-black">
        <div>
          <h1 className="text-center text-5xl py-3 uppercase mb-10 text-gray-800">
            <span className="">Our</span> <span className="">products</span>
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-24">
            <a href="vegitable.html">
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl hover:scale-105 transition-transform dark:hover:bg-opacity-70 dark:hover:shadow-2xl"
                data-aos="fade-up"
              >
                <a href="vegitable.html" className="group">
                  <img
                    className="rounded-t-lg transform group-hover:scale-105 transition-transform w-96 h-80 p-4"
                    src={image1}
                    alt=""
                  />
                </a>
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <a href="vegitable.html">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase mt-4 mb-4 text-center">
                        Vegetables
                      </h5>
                    </a>
                    <a
                      href="vegitable.html"
                      className="mt-4 uppercase inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a href="Fruit.html">
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl hover:scale-105 transition-transform dark:hover:bg-opacity-70 dark:hover:shadow-2xl"
                data-aos="fade-up"
              >
                <a href="Fruit.html" className="group">
                  <img
                    className="rounded-t-lg transform group-hover:scale-105 transition-transform w-96 h-80 p-4"
                    src={image2}
                    alt=""
                  />
                </a>
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <a href="Fruit.html">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase mt-4 mb-4 text-center">
                        Fruits
                      </h5>
                    </a>
                    <a
                      href="Fruit.html"
                      className="mt-4 uppercase inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a href="driedFish.html">
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl hover:scale-105 transition-transform dark:hover:bg-opacity-70 dark:hover:shadow-2xl"
                data-aos="fade-up"
              >
                <a href="driedFish.html" className="group">
                  <img
                    className="rounded-t-lg transform group-hover:scale-105 transition-transform w-96 h-80 p-4"
                    src={image3}
                    alt=""
                  />
                </a>
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <a href="driedFish.html">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase mt-4 mb-4 text-center">
                        Dried Fish
                      </h5>
                    </a>
                    <a
                      href="driedFish.html"
                      className="mt-4 uppercase inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a href="fish.html">
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl hover:scale-105 transition-transform dark:hover:bg-opacity-70 dark:hover:shadow-2xl"
                data-aos="fade-up"
              >
                <a href="fish.html" className="group">
                  <img
                    className="rounded-t-lg transform group-hover:scale-105 transition-transform w-96 h-80 p-4"
                    src={image4}
                    alt=""
                  />
                </a>
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <a href="fish.html">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase mt-4 mb-4 text-center">
                        Fish
                      </h5>
                    </a>
                    <a
                      href="fish.html"
                      className="mt-4 uppercase inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
