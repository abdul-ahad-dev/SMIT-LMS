import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "./admin-sidebar"
import { Outlet } from "react-router-dom"

function Admin() {
  return (
    <SidebarProvider classname="w-screen">
      <AdminSidebar />
      <main className="w-full">
        <SidebarTrigger className="fixed top-2" />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default Admin;