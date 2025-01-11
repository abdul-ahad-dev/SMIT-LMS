import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const mockTeacherData = [
    { id: 1, name: "John Doe", course: "Web Development", studentsCount: 25, avgStudentScore: "85%", rating: "4.8/5" },
    { id: 2, name: "Jane Smith", course: "Data Science", studentsCount: 20, avgStudentScore: "88%", rating: "4.9/5" },
    { id: 3, name: "Mike Johnson", course: "Mobile App Development", studentsCount: 22, avgStudentScore: "82%", rating: "4.7/5" },
];


export default function TeacherPerformanceReport() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Teacher Performance Report</CardTitle>
                <CardDescription>Overview of teacher performance and student outcomes</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Students</TableHead>
                            <TableHead>Avg. Student Score</TableHead>
                            <TableHead>Rating</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockTeacherData.map((teacher) => (
                            <TableRow key={teacher.id}>
                                <TableCell>{teacher.name}</TableCell>
                                <TableCell>{teacher.course}</TableCell>
                                <TableCell>{teacher.studentsCount}</TableCell>
                                <TableCell>{teacher.avgStudentScore}</TableCell>
                                <TableCell>{teacher.rating}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
};