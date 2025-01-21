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
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



function AssignBatchCourseDialog({
  open,
  onOpenChange,
  teacher,
}) {
  const [selectedBatch, setSelectedBatch] = useState(teacher.batch)
  const [selectedCourse, setSelectedCourse] = useState(teacher.course)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Assigning teacher ${teacher.name} to batch: ${selectedBatch} and course: ${selectedCourse}`)
    // Here you would typically send this data to your backend
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Batch and Course</DialogTitle>
          <DialogDescription>
            Assign {teacher.name} to a new batch and course. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="batch" className="text-right">
                Batch
              </Label>
              <Select onValueChange={setSelectedBatch} value={selectedBatch}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Batch A">Batch A</SelectItem>
                  <SelectItem value="Batch B">Batch B</SelectItem>
                  <SelectItem value="Batch C">Batch C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">
                Course
              </Label>
              <Select onValueChange={setSelectedCourse} value={selectedCourse}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Assign Batch and Course</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}


export default AssignBatchCourseDialog;