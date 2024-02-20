import React from 'react'
import Card from './card'

export default function Cardlist() {
  return (
    <div className='flex flex-wrap gap-6 w-full justify-start items-start'>
        <Card />
        <Card />
    </div>
  )
}
