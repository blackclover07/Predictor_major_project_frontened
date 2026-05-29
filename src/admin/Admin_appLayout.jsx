import React from 'react'
import DashboardAside from './DashboardAside'
import { Outlet } from 'react-router-dom'

const Admin_appLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#090b0e] text-gray-100 font-sans antialiased flex selection:bg-blue-500/30 selection:text-blue-200">
      <DashboardAside/>
      <Outlet/>
    </div>
  )
}

export default Admin_appLayout