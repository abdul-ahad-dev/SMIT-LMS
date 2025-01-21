import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


export function RolePermissions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Role-Based Permissions</CardTitle>
        <CardDescription>Manage permissions for different user roles</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="teacher-course-management" className="flex flex-col space-y-1">
            <span>Course Management</span>
            <span className="font-normal leading-snug text-muted-foreground">
              Allow teachers to manage their assigned courses
            </span>
          </Label>
          <Switch id="teacher-course-management" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="teacher-student-progress" className="flex flex-col space-y-1">
            <span>Student Progress Tracking</span>
            <span className="font-normal leading-snug text-muted-foreground">
              Allow teachers to view and update student progress
            </span>
          </Label>
          <Switch id="teacher-student-progress" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="student-course-access" className="flex flex-col space-y-1">
            <span>Course Access</span>
            <span className="font-normal leading-snug text-muted-foreground">
              Allow students to access their assigned courses
            </span>
          </Label>
          <Switch id="student-course-access" defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="student-progress-view" className="flex flex-col space-y-1">
            <span>Progress Viewing</span>
            <span className="font-normal leading-snug text-muted-foreground">
              Allow students to view their own progress
            </span>
          </Label>
          <Switch id="student-progress-view" defaultChecked />
        </div>
      </CardContent>
    </Card>
  )
}


export default RolePermissions;