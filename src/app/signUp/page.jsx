"use client"
import React, { useState } from 'react'
import Logo from '../components/Logo'
import Link from 'next/link'

function SignUp() {
  const [status, setStatus] = useState("");
  const [hasChosen, setHasChosen] = useState(false);

const handleStatus = (status)=> {
  setStatus(status)
  setHasChosen(true)
}

  return (
    <div className='h-screen flex flex-col
    items-center justify-center
    bg-neutral-100' >
      <Logo></Logo>
    {hasChosen ? (
      <form className='flex flex-col  items-center gap-5 mt-16'>
      <p className=' self-start text-[#4A3C5F] font-bold'>Sign into your account</p>
  
          <input type="text" className="outline-none 
          border-none h-10 p-2 w-[350px]
          rounded text-[#4a3c5f]" placeholder='Full name' />
          <input type="email" className="outline-none 
          border-none h-10 p-2 w-[350px]
          rounded " placeholder='Email' />
          <input type="password" className="outline-none 
          border-none h-10 p-2 w-[350px]
          rounded text-[#4a3c5f]" placeholder='Password' />
          <input type="password" className="outline-none 
          border-none h-10 p-2 w-[350px]
          rounded text-[#4a3c5f]" placeholder='Verify password' />
  
          <button className='bg-[#4a3c5f] w-52
          p-2 rounded-3xl text-[#D0B7F7] font-bold mt-10
          '>Sign up</button>
          <p>
              Already have an account ? <Link className='font-bold text-[#4a3c5f] ' href={"/signIn"}>Sign in</Link>
          </p>
      </form>
    ): (
      <div className='mt-10'>
        <p className='mb-5 text-purple-800'>Who are you?</p>
        <div className='flex gap-5'>
         <div onClick={()=>{handleStatus("Staff")}} className='cursor-pointer h-20 w-24 text-white bg-purple-900 flex
         justify-center items-center rounded'>Staff</div>
         <div onClick={()=>{handleStatus("Student")}} className='cursor-pointer h-20 w-24 text-white bg-purple-900 flex
         justify-center items-center rounded'>Student</div>
        </div>
      </div>
    )}
    </div>
  )
}

export default SignUp
