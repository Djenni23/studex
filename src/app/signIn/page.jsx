import React from 'react'
import Logo from '../components/Logo'
import Link from 'next/link'

function SignIn() {
  return (
    <div className='h-screen flex flex-col
    items-center justify-center
    bg-neutral-100' >
      <Logo></Logo>
    <form className='flex flex-col  items-center gap-5 mt-16'>
    <p className=' self-start text-[#4a3c5f] font-bold'>Sign into your account</p>

        <input type="text" className="outline-none 
        border-none h-10 p-2 w-[350px]
        rounded text-[#4a3c5f]" placeholder='Username' />
        <input type="password" className="outline-none 
        border-none h-10 p-2 w-[350px]
        rounded text-[#4a3c5f]" placeholder='Password' />

        <button className='bg-[#4a3c5f] w-52
        p-2 rounded-3xl text-[#D0B7F7] font-bold mt-10
        '>Login</button>

        <p>
            Don't you have an account ? <Link className='font-bold text-[#4a3c5f] ' href={"/signUp"}>Sign up</Link>
        </p>
    </form>
    </div>
  )
}

export default SignIn
