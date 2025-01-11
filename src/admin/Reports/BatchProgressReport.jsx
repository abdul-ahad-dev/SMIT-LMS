import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"


const mockBatchData = [
    { id: 1, name: "Batch A", course: "Web Development", studentsCount: 25, avgAttendance: "92%", avgScore: 85, completionRate: 75 },
    { id: 2, name: "Batch B", course: "Data Science", studentsCount: 20, avgAttendance: "88%", avgScore: 82, completionRate: 70 },
    { id: 3, name: "Batch C", course: "Mobile App Development", studentsCount: 22, avgAttendance: "90%", avgScore: 80, completionRate: 68 },
];


export default function BatchProgressReport() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Batch Progress Report</CardTitle>
                <CardDescription>Overview of batch performance and progress</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Batch Name</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Students</TableHead>
                            <TableHead>Avg. Attendance</TableHead>
                            <TableHead>Avg. Score</TableHead>
                            <TableHead>Completion Rate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockBatchData.map((batch) => (
                            <TableRow key={batch.id}>
                                <TableCell>{batch.name}</TableCell>
                                <TableCell>{batch.course}</TableCell>
                                <TableCell>{batch.studentsCount}</TableCell>
                                <TableCell>{batch.avgAttendance}</TableCell>
                                <TableCell>{batch.avgScore}%</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Progress value={batch.completionRate} className="w-[60px]" />
                                        <span>{batch.completionRate}%</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
};