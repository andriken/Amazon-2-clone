import React from 'react'
import Image from 'next/image'

import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header>
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src='/images/header/amazon_logo.png'
                    width={150}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer' />
            </div>

            <div className='hidden sm:flex items-center
                h-10 rounded-md bg-yellow-400
                flex-grow hover:bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow 
                    rounded-1-md focus:outline-none flex-shrink' 
                    type="text" />
                <SearchIcon className="h-12 p-4" />
            </div>

            <div className='text-white flex items-center text-xs 
                space-x-6 mx-6 whitespace-nowrap'>
                <div className='link'>
                    <p>Hello Andriken</p>
                    <p className='font-extrabold md:text-sm'>Account & List</p>
                </div>
                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div className='relative link flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10
                        h-4 w-4 bg-yellow-400 text-center rounded-full
                        font-bold text-black'>0</span>
                    <ShoppingCartIcon className='h-10' />
                    <p className='hidden md-inline mt-2 font-extrabold md:text-sm'>Basket</p>
                </div>
            </div>
        </div>

        <div className='flex items-center space-x-3 bg-amazon_blue-light
         text-white text-sm p-2 pl-6'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1' />
                All
            </p>
            <p>Prime Video</p>
            <p>Amazon Business</p>
            <p>Today's Deal</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header