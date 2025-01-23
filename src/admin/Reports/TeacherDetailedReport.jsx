import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// Mock data for batch-specific performance
const mockBatchPerformance = [
    { batchId: "Batch A", courseName: "Web Development", studentsCount: 25, avgAttendance: 92, avgScore: 88, completionRate: 95 },
    { batchId: "Batch C", courseName: "React Fundamentals", studentsCount: 20, avgAttendance: 88, avgScore: 85, completionRate: 90 },
    { batchId: "Batch E", courseName: "Mobile App Development", studentsCount: 22, avgAttendance: 90, avgScore: 87, completionRate: 92 },
]

export default function TeacherDetailedReport({ teacher }) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Overall Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-semibold">Assigned Courses:</p>
                            <ul className="list-disc list-inside">
                                {teacher.assignedCourses.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Batches Handled:</p>
                            <ul className="list-disc list-inside">
                                {teacher.batchesHandled.map((batch, index) => (
                                    <li key={index}>{batch}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Overall Course Completion:</p>
                            <Progress value={teacher.courseCompletion} className="w-full mt-2" />
                            <p className="text-sm text-muted-foreground mt-1">{teacher.courseCompletion}%</p>
                        </div>
                        <div>
                            <p className="font-semibold">Average Feedback Score:</p>
                            <p className="text-2xl font-bold mt-2">{teacher.feedbackScore}/5</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Batch-specific Performance</CardTitle>
                    <CardDescription>Detailed performance metrics for each batch handled by {teacher.name}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Batch</TableHead>
                                <TableHead>Course</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Avg. Attendance</TableHead>
                                <TableHead>Avg. Score</TableHead>
                                <TableHead>Completion Rate</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockBatchPerformance.map((batch) => (
                                <TableRow key={batch.batchId}>
                                    <TableCell>{batch.batchId}</TableCell>
                                    <TableCell>{batch.courseName}</TableCell>
                                    <TableCell>{batch.studentsCount}</TableCell>
                                    <TableCell>{batch.avgAttendance}%</TableCell>
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
        </div>
    )
}