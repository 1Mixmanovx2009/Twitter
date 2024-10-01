import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from "../pages"
import Navbar from '../components/Navbar'
import SiteBar from '../components/SiteBar'

function DashboardRoates() {
  return (
    <div className='flex'>
      <Navbar />
      <div className='w-[50%]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
      <SiteBar />
    </div>
  )
}

export default DashboardRoates