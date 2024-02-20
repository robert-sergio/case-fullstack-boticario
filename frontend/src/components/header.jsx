import React from 'react'
import Categories from './header/categories'
import Search from './header/search'
import UserOptions from './header/useroptions'
import Cart from './header/cart'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex flex-col gap-2 w-full items-center'>
        <div className='flex justify-around items-center w-4/5 h-16'>
            <Link href='/'>
              <Image src={'/logo.png'} alt='logo GB' width={120} height={40}/>
            </Link>
            <Search />
            <UserOptions />
            <Cart />
        </div>
        <Categories />
    </div>
  )
}
