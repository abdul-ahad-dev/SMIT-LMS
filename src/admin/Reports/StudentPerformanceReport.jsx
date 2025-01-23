import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const mockStudentData = [
    { id: 1, name: "Alice Johnson", course: "Web Development", attendance: "95%", avgScore: "88%", status: "Excellent" },
    { id: 2, name: "Bob Smith", course: "Data Science", attendance: "88%", avgScore: "76%", status: "Good" },
    { id: 3, name: "Charlie Brown", course: "Mobile App Development", attendance: "92%", avgScore: "82%", status: "Very Good" },
]


export default function StudentPerformanceReport() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Student Performance Report</CardTitle>
                <CardDescription>Overview of student performance across courses</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Attendance</TableHead>
                            <TableHead>Average Score</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockStudentData.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.course}</TableCell>
                                <TableCell>{student.attendance}</TableCell>
                                <TableCell>{student.avgScore}</TableCell>
                                <TableCell>{student.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}