import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import CardFour from './CardFour'

const Card = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-4 gap-5'>
        <CardOne/>
        <CardTwo/>
        <CardThree/>
        <CardFour/>
    </div>
  )
}

export default Card