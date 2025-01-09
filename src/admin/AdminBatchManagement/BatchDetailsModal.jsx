"use client"

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
import { useState } from "react"

function BatchDetailsModal({ open, onOpenChange, batch }) {
  const [editMode, setEditMode] = useState(false)
  const [editedBatch, setEditedBatch] = useState(batch)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedBatch((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log("Saving edited batch:", editedBatch)
    // Here you would typically send this data to your backend
    setEditMode(false)
    onOpenChange(false)
  }

  const handleExport = () => {
    console.log("Exporting batch details:", batch)
    // Implement export functionality here
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editMode ? "Edit Batch" : "Batch Details"}</DialogTitle>
          <DialogDescription>
            {editMode ? "Make changes to the batch details." : "View and manage batch information."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={editedBatch.name}
              className="col-span-3"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startDate" className="text-right">
              Start Date
            </Label>
            <Input
              id="startDate"
              name="startDate"
              value={editedBatch.startDate}
              className="col-span-3"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              End Date
            </Label>
            <Input
              id="endDate"
              name="endDate"
              value={editedBatch.endDate}
              className="col-span-3"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="teachers" className="text-right">
              Teachers
            </Label>
            <Input
              id="teachers"
              name="teachers"
              value={editedBatch.teachers.join(", ")}
              className="col-span-3"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="courses" className="text-right">
              Courses
            </Label>
            <Input
              id="courses"
              name="courses"
              value={editedBatch.courses.join(", ")}
              className="col-span-3"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Input
              id="status"
              name="status"
              value={editedBatch.status}
              className="col-span-3"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        </div>
        <DialogFooter>
          {editMode ? (
            <>
              <Button type="submit" onClick={handleSave}>Save changes</Button>
              <Button variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setEditMode(true)}>Edit</Button>
              <Button variant="outline" onClick={handleExport}>Export Details</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default BatchDetailsModal;