import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "./admin-sidebar"
import { Outlet } from "react-router-dom"

function Admin() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default Admin