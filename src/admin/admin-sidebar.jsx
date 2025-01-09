import { BookOpen, Grid, User, CalendarIcon, ChartBar, Group, Settings } from "lucide-react"
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
    url: "/admin/dashboard",
    icon: Grid,
  },
  {
    title: "User Management",
    url: "/admin/user-management",
    icon: User,
  },
  {
    title: "Course Management",
    url: "/admin/course-management",
    icon: BookOpen,
  },
  {
    title: "Batch Management",
    url: "/admin/batch-management",
    icon: Group,
  },
  {
    title: "Attendance Management",
    url: "/admin/attendance",
    icon: CalendarIcon,
  },
  {
    title: "Reports",
    url: "/admin/report",
    icon: ChartBar,
  },
  {
    title: "Profile Settings",
    url: "/admin/setting",
    icon: Settings,
  },
]

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
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
