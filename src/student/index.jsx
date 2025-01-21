import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { StudentSidebar } from "./student-sidebar"
import { Outlet } from "react-router-dom"

function Student() {
  return (
    <SidebarProvider>
      <StudentSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default Student