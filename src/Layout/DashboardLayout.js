import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../Components/Dashboard/SideNavbar'

export default function DashboardLayout() {
  return (
    <div className="flex">
      <SideNavbar className="grow" />
      <Outlet />
    </div>
  )
}
