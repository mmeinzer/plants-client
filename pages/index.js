import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import PlantCard from '../components/plant-card'

import '../styles/main.css'

const plants = [
  {
    name: 'Bob',
    type: 'Parlor Palm',
    scientific: 'Lorem Ipsum',
    watered: '5 days ago',
    checked: 'yesterday',
    icon: './jade.svg',
    check: false
  },
  {
    name: 'Max',
    type: 'Jade',
    scientific: 'Sindaptus Pictus',
    watered: '9 days ago',
    checked: '9 days ago',
    icon: './jade.svg',
    check: true
  },
  {
    name: 'Tim',
    type: 'Yucca',
    scientific: 'Plurbus Unum',
    watered: 'yesterday',
    checked: 'yesterday',
    icon: './jade.svg',
    check: false
  },
  {
    name: 'Jane',
    type: 'Snake',
    scientific: 'Finadlus Ictus',
    watered: 'today',
    checked: 'today',
    icon: './jade.svg',
    check: false
  }
]

const Home = () => (
  <div className="">
    <Head>
      <title>Plants</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="container mx-auto">
      <h2 className="text-2xl mb-4 mt-4 mx-2 text-gray-700">Plant Family</h2>
      <div className="mx-2">
        <div className="mt-2 pb-6 flex flex-col flex-wrap justify-start md:flex-row border-b md:px-4 md:pb-0">
          {plants.filter(plant => plant.check).map(plant => (
            <PlantCard key={plant.name} details={plant} />
          ))}
        </div>
        <div className="mt-2 flex flex-col flex-wrap justify-start md:flex-row md:px-4">
          {plants.filter(plant => !plant.check).map(plant => (
            <PlantCard key={plant.name} details={plant} />
          ))}
        </div>
      </div>
    </div>

  </div>
)

export default Home
