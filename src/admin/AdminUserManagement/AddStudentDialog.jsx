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

export function AddStudentDialog({ open, onOpenChange, }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        enrollmentId: "",
        batch: "",
        password: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleBatchChange = (value) => {
        setFormData((prev) => ({ ...prev, batch: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting student data:", formData)
        // Here you would typically send this data to your backend
        onOpenChange(false)
    }

    const generatePassword = () => {
        const generatedPassword = Math.random().toString(36).slice(-8)
        setFormData((prev) => ({ ...prev, password: generatedPassword }))
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Student</DialogTitle>
                    <DialogDescription>
                        Enter the details of the new student. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                Phone
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="enrollmentId" className="text-right">
                                Enrollment ID
                            </Label>
                            <Input
                                id="enrollmentId"
                                name="enrollmentId"
                                value={formData.enrollmentId}
                                onChange={handleInputChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="batch" className="text-right">
                                Batch
                            </Label>
                            <Select onValueChange={handleBatchChange}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select batch" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="batchA">Batch A</SelectItem>
                                    <SelectItem value="batchB">Batch B</SelectItem>
                                    <SelectItem value="batchC">Batch C</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="password" className="text-right">
                                Password
                            </Label>
                            <div className="col-span-3 flex gap-2">
                                <Input
                                    id="password"
                                    name="password"
                                    type="text"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="flex-grow"
                                />
                                <Button type="button" onClick={generatePassword} className="shrink-0">
                                    Generate
                                </Button>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save student</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}


export default AddStudentDialog;