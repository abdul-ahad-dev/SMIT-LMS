import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'


// Mock data for demonstration
const batches = [
    { id: 1, name: "Batch A" },
    { id: 2, name: "Batch B" },
    { id: 3, name: "Batch C" },
]

const performanceData = {
    "Batch A": {
        overallProgress: 75,
        averageGrade: 85,
        attendancePercentage: 92,
        lowAttendanceStudents: ["Alice Johnson", "Bob Williams"],
    },
    "Batch B": {
        overallProgress: 60,
        averageGrade: 78,
        attendancePercentage: 88,
        lowAttendanceStudents: ["Charlie Brown"],
    },
    "Batch C": {
        overallProgress: 80,
        averageGrade: 90,
        attendancePercentage: 95,
        lowAttendanceStudents: [],
    },
}

function PerformanceAttendanceTracking() {
    const [selectedBatch, setSelectedBatch] = useState(batches[0].id.toString())

    const handleExport = () => {
        console.log("Exporting performance and attendance data")
        // Implement export functionality here
    }

    const batchData = performanceData[batches.find(b => b.id.toString() === selectedBatch)?.name || ""]

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select batch" />
                    </SelectTrigger>
                    <SelectContent>
                        {batches.map((batch) => (
                            <SelectItem key={batch.id} value={batch.id.toString()}>
                                {batch.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button onClick={handleExport}>
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Overall Progress</CardTitle>
                        <CardDescription>Course completion progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={batchData.overallProgress} className="w-full" />
                        <p className="text-sm text-muted-foreground mt-2">
                            {batchData.overallProgress}% completed
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Average Grade</CardTitle>
                        <CardDescription>Overall performance of the batch</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{batchData.averageGrade}%</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Attendance</CardTitle>
                        <CardDescription>Overall attendance percentage</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={batchData.attendancePercentage} className="w-full" />
                        <p className="text-sm text-muted-foreground mt-2">
                            {batchData.attendancePercentage}% attendance rate
                        </p>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Low Attendance Students</CardTitle>
                    <CardDescription>Students with attendance below threshold</CardDescription>
                </CardHeader>
                <CardContent>
                    {batchData.lowAttendanceStudents.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {batchData.lowAttendanceStudents.map((student, index) => (
                                <li key={index}>{student}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No students with low attendance.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}


export default PerformanceAttendanceTracking;