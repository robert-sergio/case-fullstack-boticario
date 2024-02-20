import React from 'react'
import Card from '../card'
import Profile from './profile'
import Adress from './adress'


export default function User() {
  return (
    <div>
        <Card title={'Seus Dados'}>
          <Profile />
          <Adress />
        </Card>
    </div>
  )
}
