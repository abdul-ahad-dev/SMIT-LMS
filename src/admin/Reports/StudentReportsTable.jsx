import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// Mock data for demonstration
const mockStudentData = [
    { id: 1, name: "Alice Johnson", batch: "Batch A", attendance: 95, assignmentsSubmitted: 18, courseProgress: 85, performanceRating: "Excellent" },
    { id: 2, name: "Bob Smith", batch: "Batch B", attendance: 88, assignmentsSubmitted: 16, courseProgress: 75, performanceRating: "Good" },
    { id: 3, name: "Charlie Brown", batch: "Batch A", attendance: 92, assignmentsSubmitted: 17, courseProgress: 80, performanceRating: "Very Good" },
    { id: 4, name: "Diana Ross", batch: "Batch C", attendance: 98, assignmentsSubmitted: 20, courseProgress: 90, performanceRating: "Excellent" },
    { id: 5, name: "Edward Norton", batch: "Batch B", attendance: 85, assignmentsSubmitted: 15, courseProgress: 70, performanceRating: "Good" },
];


export default function StudentReportsTable({ batch, course }) {
    const [selectedStudent, setSelectedStudent] = useState(null)

    const filteredStudents = mockStudentData.filter(student =>
        (batch === "" || student.batch === batch) &&
        (course === "" || true) // Assuming all students are in the selected course for this mock data
    )

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Batch</TableHead>
                        <TableHead>Attendance (%)</TableHead>
                        <TableHead>Assignments Submitted</TableHead>
                        <TableHead>Course Progress (%)</TableHead>
                        <TableHead>Performance Rating</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.batch}</TableCell>
                            <TableCell>{student.attendance}</TableCell>
                            <TableCell>{student.assignmentsSubmitted}</TableCell>
                            <TableCell>{student.courseProgress}</TableCell>
                            <TableCell>{student.performanceRating}</TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" onClick={() => setSelectedStudent(student)}>
                                            View Details
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Detailed Report: {student.name}</DialogTitle>
                                            <DialogDescription>
                                                In-depth performance details for {student.name}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div>
                                                <h3 className="font-semibold">Attendance History</h3>
                                                <p>Overall attendance: {student.attendance}%</p>
                                                {/* Add more detailed attendance information here */}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Assignment Submission</h3>
                                                <p>Total assignments submitted: {student.assignmentsSubmitted}</p>
                                                {/* Add more detailed assignment information here */}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Course Progress</h3>
                                                <p>Overall progress: {student.courseProgress}%</p>
                                                {/* Add more detailed course progress information here */}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Performance Rating</h3>
                                                <p>Current rating: {student.performanceRating}</p>
                                                {/* Add more detailed performance information here */}
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
};