import React from 'react'
import AdminDashboard from './dashboard/admin/admin-dashboard'
import HomeDashboard from './dashboard/home/home-dashboard'
import { createUser } from './services'
export default function App() {
  return (
    <div>
      {/* <AdminDashboard /> */}
      <HomeDashboard />
    </div>
  )
}
