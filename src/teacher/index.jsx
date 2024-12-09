import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { TeacherSidebar } from "./teacher-sidebar"
import { Outlet } from "react-router-dom"

function Teacher() {
  return (
    <SidebarProvider>
      <TeacherSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default Teacher