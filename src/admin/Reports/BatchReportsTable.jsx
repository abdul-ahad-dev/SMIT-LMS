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
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

// Mock data for demonstration
const mockBatchData = [
    { id: 1, name: "Batch A", teacher: "John Doe", course: "Web Development", attendance: 92, averageProgress: 85, overallRating: "Excellent" },
    { id: 2, name: "Batch B", teacher: "Jane Smith", course: "Data Science", attendance: 88, averageProgress: 80, overallRating: "Very Good" },
    { id: 3, name: "Batch C", teacher: "Mike Johnson", course: "Mobile App Development", attendance: 90, averageProgress: 82, overallRating: "Excellent" },
    { id: 4, name: "Batch D", teacher: "Emily Brown", course: "UI/UX Design", attendance: 95, averageProgress: 88, overallRating: "Outstanding" },
    { id: 5, name: "Batch E", teacher: "David Wilson", course: "Machine Learning", attendance: 87, averageProgress: 78, overallRating: "Good" },
]

const mockAttendanceTrend = [
    { week: "Week 1", attendance: 88 },
    { week: "Week 2", attendance: 90 },
    { week: "Week 3", attendance: 92 },
    { week: "Week 4", attendance: 89 },
    { week: "Week 5", attendance: 91 },
]

const mockPerformanceDistribution = [
    { grade: "A", count: 10 },
    { grade: "B", count: 15 },
    { grade: "C", count: 8 },
    { grade: "D", count: 4 },
    { grade: "F", count: 1 },
]

export default function BatchReportsTable() {
    const [selectedBatch, setSelectedBatch] = useState(null)

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Batch Name</TableHead>
                        <TableHead>Assigned Teacher</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Attendance (%)</TableHead>
                        <TableHead>Average Progress (%)</TableHead>
                        <TableHead>Overall Rating</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockBatchData.map((batch) => (
                        <TableRow key={batch.id}>
                            <TableCell>{batch.name}</TableCell>
                            <TableCell>{batch.teacher}</TableCell>
                            <TableCell>{batch.course}</TableCell>
                            <TableCell>{batch.attendance}%</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Progress value={batch.averageProgress} className="w-[60px]" />
                                    <span>{batch.averageProgress}%</span>
                                </div>
                            </TableCell>
                            <TableCell>{batch.overallRating}</TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" onClick={() => setSelectedBatch(batch)}>
                                            View Detailed Report
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl">
                                        <DialogHeader>
                                            <DialogTitle>Detailed Report: {batch.name}</DialogTitle>
                                            <DialogDescription>
                                                In-depth performance details for {batch.name}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Attendance Trend</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <ResponsiveContainer width="100%" height={300}>
                                                        <BarChart data={mockAttendanceTrend}>
                                                            <XAxis dataKey="week" />
                                                            <YAxis />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Bar dataKey="attendance" fill="#8884d8" name="Attendance %" />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Student Performance Distribution</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <ResponsiveContainer width="100%" height={300}>
                                                        <BarChart data={mockPerformanceDistribution}>
                                                            <XAxis dataKey="grade" />
                                                            <YAxis />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Bar dataKey="count" fill="#82ca9d" name="Number of Students" />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Course Completion Progress</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <Progress value={batch.averageProgress} className="w-full h-4 mt-2" />
                                                    <p className="text-sm text-muted-foreground mt-2">
                                                        Average progress: {batch.averageProgress}%
                                                    </p>
                                                </CardContent>
                                            </Card>
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