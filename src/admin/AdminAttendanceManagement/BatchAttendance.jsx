import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

// Mock data for demonstration
const batches = [
    { id: 1, name: "Batch A" },
    { id: 2, name: "Batch B" },
    { id: 3, name: "Batch C" },
]

const students = [
    { id: 1, name: "Alice Johnson", attendance: true },
    { id: 2, name: "Bob Williams", attendance: false },
    { id: 3, name: "Charlie Brown", attendance: true },
    { id: 4, name: "Diana Smith", attendance: true },
]

function BatchAttendance({ dateRange }) {
    const [selectedBatch, setSelectedBatch] = useState("")
    const [attendanceData, setAttendanceData] = useState(students)

    const handleAttendanceChange = (studentId, checked) => {
        setAttendanceData(attendanceData.map(student =>
            student.id === studentId ? { ...student, attendance: checked } : student
        ))
        // Here you would typically send this data to your backend
        console.log(`Attendance for student ${studentId} marked as ${checked ? 'present' : 'absent'} in batch ${selectedBatch} on ${dateRange.from.toDateString()}`)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Batch Attendance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="batch">Select Batch</Label>
                    <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                        <SelectTrigger id="batch">
                            <SelectValue placeholder="Select a batch" />
                        </SelectTrigger>
                        <SelectContent>
                            {batches.map((batch) => (
                                <SelectItem key={batch.id} value={batch.id.toString()}>
                                    {batch.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student Name</TableHead>
                            <TableHead>Attendance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {attendanceData.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={student.attendance}
                                        onCheckedChange={(checked) => handleAttendanceChange(student.id, checked)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground">
                    Marking attendance for: {dateRange.from.toDateString()} to {dateRange.to.toDateString()}
                </p>
            </CardContent>
        </Card>
    )
}


export default BatchAttendance;