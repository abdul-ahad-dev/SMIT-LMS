import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format, subDays, isToday, isBefore, eachDayOfInterval } from "date-fns"

// Mock data for batches and students
const batchesData = [
    { id: 1, name: "Batch A" },
    { id: 2, name: "Batch B" },
    { id: 3, name: "Batch C" },
]

const studentsData = [
    { id: 1, name: "Alice Johnson", batchId: 1 },
    { id: 2, name: "Bob Williams", batchId: 1 },
    { id: 3, name: "Charlie Brown", batchId: 2 },
    { id: 4, name: "Diana Smith", batchId: 2 },
    { id: 5, name: "Ethan Davis", batchId: 3 },
]

const generateMockAttendance = (studentId, startDate, endDate) => {
    const attendance = {}
    let currentDate = new Date(startDate)
    while (currentDate <= endDate) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) { // Exclude weekends
            attendance[format(currentDate, 'yyyy-MM-dd')] = Math.random() < 0.9 // 90% chance of being present
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }
    return attendance
}


function BatchAttendance() {
    const [selectedBatch, setSelectedBatch] = useState("")
    const [students, setStudents] = useState([])
    const today = new Date()
    const oneMonthAgo = subDays(today, 30)

    useEffect(() => {
        const initialStudents = studentsData.map(student => ({
            ...student,
            attendance: generateMockAttendance(student.id, oneMonthAgo, today)
        }))
        setStudents(initialStudents)
    }, [])

    const handleAttendanceChange = (studentId, date, checked) => {
        if (isToday(new Date(date))) {
            setStudents(prevStudents =>
                prevStudents.map(student =>
                    student.id === studentId
                        ? { ...student, attendance: { ...student.attendance, [date]: checked } }
                        : student
                )
            )
        }
    }

    const getDatesInRange = (startDate, endDate) => {
        return eachDayOfInterval({ start: startDate, end: endDate })
            .filter(date => date.getDay() !== 0 && date.getDay() !== 6) // Exclude weekends
    }

    const datesInRange = getDatesInRange(oneMonthAgo, today)

    const saveAttendance = () => {
        console.log("Saving attendance for batch:", selectedBatch, students.filter(s => s.batchId.toString() === selectedBatch))
        // Here you would typically send this data to your backend
    }

    const filteredStudents = students.filter(student => student.batchId.toString() === selectedBatch)

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Batch Attendance (Last 30 Days)</CardTitle>
                <div className="flex flex-wrap items-center space-x-2">
                    <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a batch" />
                        </SelectTrigger>
                        <SelectContent>
                            {batchesData.map((batch) => (
                                <SelectItem key={batch.id} value={batch.id.toString()}>
                                    {batch.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button onClick={saveAttendance} disabled={!selectedBatch} className="mt-2 sm:mt-0">Save Attendance</Button>
                </div>
            </CardHeader>
            <CardContent>
                {selectedBatch ? (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="sticky left-0 bg-background">Student</TableHead>
                                    {datesInRange.map(date => (
                                        <TableHead key={date.toISOString()} className="text-center">
                                            {format(date, 'MMM d')}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredStudents.map(student => (
                                    <TableRow key={student.id}>
                                        <TableCell className="sticky left-0 bg-background font-medium">
                                            {student.name}
                                        </TableCell>
                                        {datesInRange.map(date => {
                                            const dateStr = format(date, 'yyyy-MM-dd')
                                            const isEditable = isToday(date)
                                            const isPast = isBefore(date, today) && !isToday(date)
                                            return (
                                                <TableCell key={dateStr} className="text-center">
                                                    <Checkbox
                                                        checked={student.attendance[dateStr] || false}
                                                        onCheckedChange={(checked) => handleAttendanceChange(student.id, dateStr, checked)}
                                                        disabled={!isEditable}
                                                        className={isPast ? "opacity-50" : ""}
                                                    />
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div className="text-center py-4">Please select a batch to view attendance.</div>
                )}
            </CardContent>
        </Card>
    )
}


export default BatchAttendance;