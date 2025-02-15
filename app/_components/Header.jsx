import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md items-center'>
        <div className='flex font-bold text-xl items-center' >
        <Image src={'/coursemakerlogo.svg'} alt='logo' width={40} height={40}/><h2 className='ml-2'>Course Maker AI</h2></div>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header