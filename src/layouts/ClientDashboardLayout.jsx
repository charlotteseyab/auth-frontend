import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientSidebar from '../components/navbars/ClientSidebar'

const ClientDashboardLayout = () => {
  return (
    <div>
         <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <ClientSidebar />
        <Outlet />
    </div>
    </div>
  )
}

export default ClientDashboardLayout