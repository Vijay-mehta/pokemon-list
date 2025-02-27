'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
const BackButton = () => {
    const router= useRouter()
  return (
    <div className='cursor-pointer  text-4xl' onClick={()=>router.back()}>&larr;</div>
  )
}

export default BackButton