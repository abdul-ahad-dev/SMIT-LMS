import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { StudentSidebar } from "./student-sidebar"
import { Outlet } from "react-router-dom"

function Student() {
  return (
    <SidebarProvider  classname="w-screen">
      <StudentSidebar />
      <main className="w-full" >
        <SidebarTrigger className="fixed top-2" />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default Student