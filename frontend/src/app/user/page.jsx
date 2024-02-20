import React from 'react'
import Content from '@/components/content'
import Header from '@/components/header'
import User from '@/components/user/user'

export default function page() {
  return (
    <div>
        <Header />
        <Content>
            <User />
        </Content>

    </div>
  )
}
