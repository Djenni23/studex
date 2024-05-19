"use client"
import React from 'react'
import Logo from './components/Logo'
import { useRouter } from 'next/navigation'

function Home() {
  const router = useRouter()
  return (
    <div className='h-screen flex flex-col
    items-center justify-center
    bg-neutral-100' >
      <Logo></Logo>
      <div>
      <div className='mt-20'>
        <div className='flex gap-5'>
         <div onClick={()=>{router.push("/signIn")}} className='cursor-pointer h-20 w-24 text-white bg-purple-900 flex
         justify-center items-center rounded'>Sign In</div>
         <div onClick={()=>{router.push("/signUp")}} className='cursor-pointer h-20 w-24 text-white bg-purple-900 flex
         justify-center items-center rounded'>Sign Up</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
