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

// Mock data for demonstration
const courses = [
    {
        name: "Introduction to React",
        teachers: ["John Doe"],
        batches: ["Batch A", "Batch B"],
        status: "Active",
        category: "Programming",
        startDate: "2025-01-01",
        endDate: "2025-03-01",
        duration: "2 months"
    },
    {
        name: "Advanced JavaScript",
        teachers: ["Jane Smith"],
        batches: ["Batch C"],
        status: "Active",
        category: "Programming",
        startDate: "2025-02-01",
        endDate: "2025-04-01",
        duration: "2 months"
    },
    {
        name: "Python for Beginners",
        teachers: ["Bob Johnson"],
        batches: ["Batch A"],
        status: "Inactive",
        category: "Data Science",
        startDate: "2025-01-15",
        endDate: "2025-03-15",
        duration: "2 months"
    }
];


function Courselist() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredCourses = courses.filter(
        (course) =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.teachers.some((teacher) => teacher.toLowerCase().includes(searchTerm.toLowerCase())) ||
            course.batches.some((batch) => batch.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="space-y-4">
            <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
            />
            <Table className=''>
                <TableHeader>
                    <TableRow>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Assigned Teacher(s)</TableHead>
                        <TableHead>Batches Linked</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                        <TableHead>Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody className="space-y-2">
                    {filteredCourses.map((course) => (
                        <TableRow key={course.id} className="bg-white rounded-lg shadow-sm">
                            <TableCell className="font-medium">{course.name}</TableCell>
                            <TableCell>{course.teachers.join(", ")}</TableCell>
                            <TableCell>{course.batches.join(", ")}</TableCell>
                            <TableCell>{course.status}</TableCell>
                            <TableCell>{course.category}</TableCell>
                            <TableCell>{course.startDate}</TableCell>
                            <TableCell>{course.endDate}</TableCell>
                            <TableCell>{course.duration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


export default Courselist;
