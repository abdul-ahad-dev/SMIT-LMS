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
// import { AddStudentDialog } from "./add-student-dialog"

// Mock data for demonstration
const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", enrollmentId: "ST001", batch: "Batch A", progress: "85%" },
    { id: 2, name: "Bob Williams", email: "bob@example.com", enrollmentId: "ST002", batch: "Batch B", progress: "72%" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", enrollmentId: "ST003", batch: "Batch C", progress: "91%" },
]

export function StudentManagement() {
    const [searchTerm, setSearchTerm] = useState("")
    const [showAddDialog, setShowAddDialog] = useState(false)

    const filteredStudents = students.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.enrollmentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.batch.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Button onClick={() => setShowAddDialog(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Student
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Enrollment ID</TableHead>
                <TableHead>Assigned Batch</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.enrollmentId}</TableCell>
                  <TableCell>{student.batch}</TableCell>
                  <TableCell>{student.progress}</TableCell>
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
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(student.email)}>
                          Copy email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit details</DropdownMenuItem>
                        <DropdownMenuItem>Assign batch</DropdownMenuItem>
                        <DropdownMenuItem>View progress</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete account</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <AddStudentDialog open={showAddDialog} onOpenChange={setShowAddDialog} /> */}
        </div >
      )
};