import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {


  return (
    <div className=' w-full flex justify-between p-7'>
      <h1 className='font text-4xl font-bold text-blue-700'>App Mern Blog</h1>
      <div className='font-bold text-lg border-gray-500 border-2 p-4 rounded-3xl'>
        <Link to={'/'}>Home</Link>
        <Link to={'/add-blog'} className='ml-7'>Add new Blog</Link>
      </div>
    
    </div>
  )
}

export default Header