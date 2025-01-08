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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

// Mock data for demonstration
const courses = [
    { id: 1, name: "Introduction to React" },
    { id: 2, name: "Advanced JavaScript" },
    { id: 3, name: "Python for Beginners" },
]

const teachers = [
    { id: 1, name: "John Doe", expertise: "React, JavaScript" },
    { id: 2, name: "Jane Smith", expertise: "JavaScript, Node.js" },
    { id: 3, name: "Bob Johnson", expertise: "Python, Data Science" },
]

function AssignTeacherModal({ open, onOpenChange, }) {
    const [selectedCourse, setSelectedCourse] = useState("")
    const [selectedTeacher, setSelectedTeacher] = useState("")

    const handleAssign = () => {
        console.log(`Assigning ${selectedTeacher} to ${selectedCourse}`)
        // Here you would typically send this data to your backend
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assign Teacher to Course</DialogTitle>
                    <DialogDescription>
                        Select a course and assign a teacher based on their expertise.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="course" className="text-right">
                            Course
                        </Label>
                        <Select onValueChange={setSelectedCourse}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select course" />
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
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="teacher" className="text-right">
                            Teacher
                        </Label>
                        <Select onValueChange={setSelectedTeacher}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select teacher" />
                            </SelectTrigger>
                            <SelectContent>
                                {teachers.map((teacher) => (
                                    <SelectItem key={teacher.id} value={teacher.id.toString()}>
                                        {teacher.name} - {teacher.expertise}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleAssign}>Assign Teacher</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default AssignTeacherModal;