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
import { MoreHorizontal, Eye, Edit, Trash, UserPlus } from 'lucide-react'


// Mock data for demonstration
const batches = [
    { id: 1, name: "Batch A", startDate: "2023-09-01", endDate: "2023-12-31", teachers: ["John Doe"], studentCount: 25, courses: ["React Basics", "JavaScript Advanced"], status: "Active" },
    { id: 2, name: "Batch B", startDate: "2023-10-01", endDate: "2024-01-31", teachers: ["Jane Smith"], studentCount: 30, courses: ["Python for Beginners"], status: "Active" },
    { id: 3, name: "Batch C", startDate: "2023-08-01", endDate: "2023-11-30", teachers: ["Bob Johnson"], studentCount: 20, courses: ["Data Structures", "Algorithms"], status: "Inactive" },
]

function BatchList({ onViewDetails, onAssign }) {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredBatches = batches.filter(
        (batch) =>
            batch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            batch.teachers.some((teacher) => teacher.toLowerCase().includes(searchTerm.toLowerCase())) ||
            batch.courses.some((course) => course.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="space-y-4">
            <Input
                placeholder="Search batches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Batch Name</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                        <TableHead>Assigned Teacher(s)</TableHead>
                        <TableHead>Students</TableHead>
                        <TableHead>Courses</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredBatches.map((batch) => (
                        <TableRow key={batch.id}>
                            <TableCell className="font-medium">{batch.name}</TableCell>
                            <TableCell>{batch.startDate}</TableCell>
                            <TableCell>{batch.endDate}</TableCell>
                            <TableCell>{batch.teachers.join(", ")}</TableCell>
                            <TableCell>{batch.studentCount}</TableCell>
                            <TableCell>{batch.courses.join(", ")}</TableCell>
                            <TableCell>{batch.status}</TableCell>
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
                                        <DropdownMenuItem onClick={() => onViewDetails(batch)}>
                                            <Eye className="mr-2 h-4 w-4" /> View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onViewDetails(batch)}>
                                            <Edit className="mr-2 h-4 w-4" /> Edit Batch
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onAssign(batch)}>
                                            <UserPlus className="mr-2 h-4 w-4" /> Assign Students/Teachers
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-red-600">
                                            <Trash className="mr-2 h-4 w-4" /> Delete Batch
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


export default BatchList;