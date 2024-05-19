import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='text-3xl font-bold text-purple-900 '>
      <Image src={"/studexLogo.png"} width={150} height={20}></Image>
    </div>
  )
}

export default Logo
