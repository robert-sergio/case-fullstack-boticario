import React from 'react'

export default function Content(props) {
  return (
    <div className='w-full p-12'>
        {props.children}
    </div>
  )
}
