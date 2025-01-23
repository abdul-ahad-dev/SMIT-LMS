import { BookOpen, Grid, Layers, FileText, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/student/dashboard",
    icon: Grid,
  },
  {
    title: "Attendance",
    url: "/student/attendance",
    icon: Layers,
  },
  {
    title: "Courses",
    url: "/student/course",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    url: "/student/assignment",
    icon: FileText,
  },
  {
    title: "Profile Settings",
    url: "/student/setting",
    icon: Settings,
  },
]

export function StudentSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Student Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
