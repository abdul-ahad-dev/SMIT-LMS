import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Mock data for demonstration
const allStudents = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Williams" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "Diana Smith" },
]

const allTeachers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
]

function AssignStudentsTeachersModal({ open, onOpenChange, batch }) {
    const [selectedStudents, setSelectedStudents] = useState(batch.students || [])
    const [selectedTeachers, setSelectedTeachers] = useState(batch.teachers || [])

    const handleStudentChange = (studentId) => {
        setSelectedStudents((prev) =>
            prev.includes(studentId)
                ? prev.filter((id) => id !== studentId)
                : [...prev, studentId]
        )
    }

    const handleTeacherChange = (teacherId) => {
        setSelectedTeachers((prev) =>
            prev.includes(teacherId)
                ? prev.filter((id) => id !== teacherId)
                : [...prev, teacherId]
        )
    }

    const handleSave = () => {
        console.log("Saving assignments:", { students: selectedStudents, teachers: selectedTeachers })
        // Here you would typically send this data to your backend
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assign Students and Teachers</DialogTitle>
                    <DialogDescription>
                        Assign students and teachers to {batch.name}.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="students" className="text-right">
                            Students
                        </Label>
                        <div className="col-span-3">
                            {allStudents.map((student) => (
                                <div key={student.id} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id={`student-${student.id}`}
                                        checked={selectedStudents.includes(student.id)}
                                        onChange={() => handleStudentChange(student.id)}
                                    />
                                    <label htmlFor={`student-${student.id}`}>{student.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="teachers" className="text-right">
                            Teachers
                        </Label>
                        <div className="col-span-3">
                            {allTeachers.map((teacher) => (
                                <div key={teacher.id} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id={`teacher-${teacher.id}`}
                                        checked={selectedTeachers.includes(teacher.id)}
                                        onChange={() => handleTeacherChange(teacher.id)}
                                    />
                                    <label htmlFor={`teacher-${teacher.id}`}>{teacher.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSave}>Save assignments</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default AssignStudentsTeachersModal;