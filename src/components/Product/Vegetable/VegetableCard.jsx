import React from 'react'

const VegetableCard = ({ imageUrl, title, link })=> {
  return (
    <div>
       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl hover:scale-105 transition-transform dark:hover:bg-opacity-70 dark:hover:shadow-2xl">
      <a href={link} className="group">
        <img className="rounded-t-lg transform group-hover:scale-105 transition-transform w-96 h-80 p-4" src={imageUrl} alt={title} />
      </a>
      <div className="p-5 flex justify-center items-center">
        <div>
          <a href={link}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase mt-4 mb-4 text-center">{title}</h5>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default VegetableCard
