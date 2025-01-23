import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookPlus } from 'lucide-react'

// Mock data for demonstration
const courses = [
    { id: 1, name: "Introduction to React", outline: "Learn the basics of React, including components, state, and props." },
    { id: 2, name: "Advanced JavaScript", outline: "Dive deep into JavaScript concepts like closures, prototypes, and async programming." },
    { id: 3, name: "Data Structures and Algorithms", outline: "Explore fundamental data structures and algorithms used in computer science." },
]

const teachers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
]

const batches = [
    { id: 1, name: "Batch A" },
    { id: 2, name: "Batch B" },
    { id: 3, name: "Batch C" },
]

export function T_AssignCourseDialog() {
    const [role, setRole] = useState(null)
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [assignTo, setAssignTo] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [confirmationMessage, setConfirmationMessage] = useState("")

    const handleAssign = () => {
        if (role && selectedCourse && assignTo) {
            const courseName = courses.find(c => c.id === selectedCourse)?.name
            const assigneeName = role === "Teacher"
                ? teachers.find(t => t.id === assignTo)?.name
                : batches.find(b => b.id === assignTo)?.name
            setConfirmationMessage(`Course "${courseName}" assigned successfully to ${role} "${assigneeName}".`)
            setTimeout(() => {
                setIsOpen(false)
                setConfirmationMessage("")
            }, 2000)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>
                    <BookPlus className="mr-2 h-4 w-4" />
                    Assign Course
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assign Course</DialogTitle>
                    <DialogDescription>
                        Assign a course to a teacher or batch. Click assign when {`you're`} done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="text-right">
                            Role
                        </Label>
                        <Select onValueChange={(value) => setRole(value)}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Teacher">Teacher</SelectItem>
                                <SelectItem value="Batch">Batch</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="course" className="text-right">
                            Course
                        </Label>
                        <Select onValueChange={(value) => setSelectedCourse(Number(value))}>
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
                    {role && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="assignTo" className="text-right">
                                Assign To
                            </Label>
                            <Select onValueChange={(value) => setAssignTo(Number(value))}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder={`Select ${role.toLowerCase()}`} />
                                </SelectTrigger>
                                <SelectContent>
                                    {(role === "Teacher" ? teachers : batches).map((item) => (
                                        <SelectItem key={item.id} value={item.id.toString()}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                    {selectedCourse && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Preview</Label>
                            <ScrollArea className="col-span-3 h-[100px] w-[300px] rounded-md border p-4">
                                <h4 className="mb-2 font-medium leading-none">
                                    {courses.find(c => c.id === selectedCourse)?.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {courses.find(c => c.id === selectedCourse)?.outline}
                                </p>
                            </ScrollArea>
                        </div>
                    )}
                </div>
                <DialogFooter>
                    {confirmationMessage ? (
                        <p className="text-sm text-green-600">{confirmationMessage}</p>
                    ) : (
                        <>
                            <Button type="submit" onClick={handleAssign} disabled={!role || !selectedCourse || !assignTo}>
                                Assign
                            </Button>
                        </>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default T_AssignCourseDialog;