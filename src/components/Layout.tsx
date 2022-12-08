import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col gap-2 mx-auto w-[70rem] max-w-[95%] h-full'>
      <Outlet/>
    </div>
  )
}

export default Layout