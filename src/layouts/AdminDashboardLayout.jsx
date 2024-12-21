import React from 'react'
import AdminSidebar from '../components/navbars/AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboardLayout = () => {
  return (
    
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
 {/* Sidebar */}
 <AdminSidebar />
   <Outlet />
</div>
  )
}

export default AdminDashboardLayout