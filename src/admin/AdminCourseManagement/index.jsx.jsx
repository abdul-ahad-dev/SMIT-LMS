import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseList } from "./course-list"
import { AddCourseForm } from "./add-course-form"
import { AssignTeacherModal } from "./assign-teacher-modal"
import { CourseProgressOverview } from "./course-progress-overview"
import { Button } from "@/components/ui/button"
import { Plus, Upload, Download } from 'lucide-react'


function AdminCourseManagement() {
  const [activeTab, setActiveTab] = useState("courses")
  const [showAssignTeacherModal, setShowAssignTeacherModal] = useState(false)

  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Course Management</h2>
        <p className="text-muted-foreground">
          Manage courses, assign teachers, and monitor progress in the Learning Management System.
        </p>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="add-course">Add Course</TabsTrigger>
            <TabsTrigger value="progress">Course Progress</TabsTrigger>
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
        <TabsContent value="courses" className="space-y-4">
          <CourseList />
          <Button onClick={() => setShowAssignTeacherModal(true)}>
            <Plus className="mr-2 h-4 w-4" /> Assign Teacher
          </Button>
        </TabsContent>
        <TabsContent value="add-course" className="space-y-4">
          <AddCourseForm />
        </TabsContent>
        <TabsContent value="progress" className="space-y-4">
          <CourseProgressOverview />
        </TabsContent>
      </Tabs>
      <AssignTeacherModal
        open={showAssignTeacherModal}
        onOpenChange={setShowAssignTeacherModal}
      />
    </div>
  )
}

export default AdminCourseManagement