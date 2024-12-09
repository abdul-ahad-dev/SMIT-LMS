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
    url: "/teacher/dashboard",
    icon: Grid,
  },
  {
    title: "Batches",
    url: "/teacher/batch",
    icon: Layers,
  },
  {
    title: "Courses",
    url: "/teacher/course",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    url: "/teacher/assignment",
    icon: FileText,
  },
  {
    title: "Profile Settings",
    url: "/teacher/setting",
    icon: Settings,
  },
]

export function TeacherSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Teacher Dashboard</SidebarGroupLabel>
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
