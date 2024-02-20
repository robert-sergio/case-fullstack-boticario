import React from 'react'
import Categories from './header/categories'
import Search from './header/search'
import UserOptions from './header/useroptions'
import Cart from './header/cart'

export default function Header() {
  return (
    <div className='flex flex-col gap-2 w-full items-center'>
        <div className='flex justify-around items-center w-4/5 h-16'>
            <div>Boticario</div>
            <Search />
            <UserOptions />
            <Cart />
        </div>
        <Categories />
    </div>
  )
}
