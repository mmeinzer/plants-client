import React from 'react'

function PlantCard({ details }) {

  return (
    <div className="mt-4 bg-white p-4 rounded border-2 justify-center md:mx-3 md:w-2/5 md:mb-6">
      <h3 className="text-gray-600 font-bold text-xl leading-none">{details.name}</h3>
      <h4 className="text-sm text-gray-600">{details.type} <span>({details.scientific})</span></h4>
      <p className="capitalize text-sm text-gray-800 md:mt-2">💧 {details.watered}</p>
      <p className="capitalize text-sm text-gray-800 md:mt-2">👀 {details.checked}</p>
    </div>
  )
}

export default PlantCard
