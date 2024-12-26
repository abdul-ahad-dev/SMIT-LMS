import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { TeacherManagement } from "./components/TeacherManagement"
// import { StudentManagement } from "./components/StudentManagement"
import { Button } from "@/components/ui/button"
import { Download, Upload } from 'lucide-react'


function AdminUserManagement() {
  const [activeTab, setActiveTab] = useState("teachers")


  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
        <p className="text-muted-foreground">
          Manage teachers and students in the Learning Management System.
        </p>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Bulk Upload
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>
        <TabsContent value="teachers" className="space-y-4">
          {/* <TeacherManagement /> */}
        </TabsContent>
        <TabsContent value="students" className="space-y-4">
          {/* <StudentManagement /> */}
        </TabsContent>
      </Tabs>
      {/* <RolePermissions /> */}
    </div>
  )
}

export default AdminUserManagement