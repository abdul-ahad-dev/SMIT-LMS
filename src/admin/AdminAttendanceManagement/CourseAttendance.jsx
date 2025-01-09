import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// Mock data for demonstration
const courses = [
    { id: 1, name: "Introduction to React" },
    { id: 2, name: "Advanced JavaScript" },
    { id: 3, name: "Python for Beginners" },
]

const attendanceData = [
    { id: 1, name: "Alice Johnson", attendance: 90 },
    { id: 2, name: "Bob Williams", attendance: 75 },
    { id: 3, name: "Charlie Brown", attendance: 95 },
    { id: 4, name: "Diana Smith", attendance: 85 },
]

function CourseAttendance({ dateRange }) {
    const [selectedCourse, setSelectedCourse] = useState("")

    return (
        <Card>
            <CardHeader>
                <CardTitle>Course Attendance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="course">Select Course</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                        <SelectTrigger id="course">
                            <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                            {courses.map((course) => (
                                <SelectItem key={course.id} value={course.id.toString()}>
                                    {course.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student Name</TableHead>
                            <TableHead>Attendance Percentage</TableHead>
                            <TableHead>Progress</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {attendanceData.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.attendance}%</TableCell>
                                <TableCell>
                                    <Progress value={student.attendance} className="w-[60%]" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground">
                    Showing attendance for: {dateRange.from.toDateString()} to {dateRange.to.toDateString()}
                </p>
            </CardContent>
        </Card>
    )
}


export default CourseAttendance;