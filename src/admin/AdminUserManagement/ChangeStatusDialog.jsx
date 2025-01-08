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


function ChangeStatusDialog({
    open,
    onOpenChange,
    teacher,
}) {
    const [selectedStatus, setSelectedStatus] = useState(teacher.status)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Changing status for teacher ${teacher.name} to: ${selectedStatus}`)
        // Here you would typically send this data to your backend
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Change Teacher Status</DialogTitle>
                    <DialogDescription>
                        Change the status of {teacher.name}. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                                Status
                            </Label>
                            <Select onValueChange={setSelectedStatus} value={selectedStatus}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Inactive">Inactive</SelectItem>
                                    <SelectItem value="On Leave">On Leave</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Change Status</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}


export default ChangeStatusDialog;