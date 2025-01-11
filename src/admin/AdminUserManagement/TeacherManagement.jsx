import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Plus } from 'lucide-react'
import AddTeacherDialog from "./AddTeacherDialog"
import EditTeacherDialog from "./EditTeacherDialog"
import AssignBatchCourseDialog from "./AssignBatchCourseDialog"
import ChangeStatusDialog from "./ChangeStatusDialog"
import DeleteConfirmationDialog from "./DeleteConfirmationDialog"

// Mock data for demonstration
const teachers = [
  { id: 1, name: "John Doe", email: "john@example.com", batch: "Batch A", course: "Web Development", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", batch: "Batch B", course: "Data Science", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", batch: "Batch C", course: "Mobile App Development", status: "Inactive" },
]

export function TeacherManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [showAssignDialog, setShowAssignDialog] = useState(false)
  const [showStatusDialog, setShowStatusDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [selectedTeacher, setSelectedTeacher] = useState(null)

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.course.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher)
    setShowEditDialog(true)
  }

  const handleAssign = (teacher) => {
    setSelectedTeacher(teacher)
    setShowAssignDialog(true)
  }

  const handleChangeStatus = (teacher) => {
    setSelectedTeacher(teacher)
    setShowStatusDialog(true)
  }

  const handleDelete = (teacher) => {
    setSelectedTeacher(teacher)
    setShowDeleteDialog(true)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search teachers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Teacher
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Assigned Batch</TableHead>
            <TableHead>Assigned Course</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTeachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell className="font-medium">{teacher.name}</TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell>{teacher.batch}</TableCell>
              <TableCell>{teacher.course}</TableCell>
              <TableCell>{teacher.status}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => navigator.clipboard.writeText(teacher.email)}>
                      Copy email
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleEdit(teacher)}>Edit details</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleAssign(teacher)}>Assign batch/course</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleChangeStatus(teacher)}>Change status</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(teacher)} className="text-red-600">
                      Delete account
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddTeacherDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
      {selectedTeacher && (
        <>
          <EditTeacherDialog
            open={showEditDialog}
            onOpenChange={setShowEditDialog}
            teacher={selectedTeacher}
          />
          <AssignBatchCourseDialog
            open={showAssignDialog}
            onOpenChange={setShowAssignDialog}
            teacher={selectedTeacher}
          />
          <ChangeStatusDialog
            open={showStatusDialog}
            onOpenChange={setShowStatusDialog}
            teacher={selectedTeacher}
          />
          <DeleteConfirmationDialog
            open={showDeleteDialog}
            onOpenChange={setShowDeleteDialog}
            teacherName={selectedTeacher.name}
            onConfirm={() => {
              // Implement delete logic here
              console.log(`Deleting teacher: ${selectedTeacher.name}`)
              setShowDeleteDialog(false)
            }}
          />
        </>
      )}
    </div>
  )
}


export default TeacherManagement;