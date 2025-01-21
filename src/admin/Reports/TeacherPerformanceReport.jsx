import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import TeacherDetailedReport from "./TeacherDetailedReport"

const mockTeacherData = [
    { id: 1, name: "John Doe", assignedCourses: ["Web Development", "React Fundamentals"], batchesHandled: ["Batch A", "Batch C"], courseCompletion: 92, feedbackScore: 4.7 },
    { id: 2, name: "Jane Smith", assignedCourses: ["Data Science", "Python for Beginners"], batchesHandled: ["Batch B", "Batch D"], courseCompletion: 88, feedbackScore: 4.9 },
    { id: 3, name: "Mike Johnson", assignedCourses: ["Mobile App Development", "iOS Development"], batchesHandled: ["Batch A", "Batch E"], courseCompletion: 85, feedbackScore: 4.6 },
    { id: 4, name: "Emily Brown", assignedCourses: ["UI/UX Design", "Figma Masterclass"], batchesHandled: ["Batch C", "Batch F"], courseCompletion: 95, feedbackScore: 4.8 },
    { id: 5, name: "David Wilson", assignedCourses: ["Machine Learning", "AI Fundamentals"], batchesHandled: ["Batch B", "Batch D"], courseCompletion: 90, feedbackScore: 4.5 },
]

export default function TeacherPerformanceReport() {
    const [selectedTeacher, setSelectedTeacher] = useState(null)

    return (
        <Card>
            <CardHeader>
                <CardTitle>Teacher Performance Report</CardTitle>
                <CardDescription>Overview of teacher performance and course delivery</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Teacher Name</TableHead>
                            <TableHead>Assigned Courses</TableHead>
                            <TableHead>Batches Handled</TableHead>
                            <TableHead>Course Completion (%)</TableHead>
                            <TableHead>Feedback Score</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockTeacherData.map((teacher) => (
                            <TableRow key={teacher.id}>
                                <TableCell>{teacher.name}</TableCell>
                                <TableCell>{teacher.assignedCourses.join(", ")}</TableCell>
                                <TableCell>{teacher.batchesHandled.join(", ")}</TableCell>
                                <TableCell>{teacher.courseCompletion}%</TableCell>
                                <TableCell>{teacher.feedbackScore}/5</TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="sm" onClick={() => setSelectedTeacher(teacher)}>
                                                View Detailed Report
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl">
                                            <DialogHeader>
                                                <DialogTitle>Detailed Report: {teacher.name}</DialogTitle>
                                                <DialogDescription>
                                                    In-depth performance details for {teacher.name}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <TeacherDetailedReport teacher={teacher} />
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
};