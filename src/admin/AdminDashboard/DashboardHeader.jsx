import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { UserPlus, BookPlus, FolderPlus } from 'lucide-react'
import AddUserForm from "./AddUserForm"
import CreateBatchForm from "./CreateBatchForm"
import AssignCourseDialog from "./AssignCourseDialog"


export default function DashboardHeader() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <UserPlus className="mr-2 h-4 w-4" />
                            Add User
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] max-h-[80vh] flex flex-col">
                        <DialogHeader>
                            <DialogTitle>Add User</DialogTitle>
                            <DialogDescription>
                                Add a new user to the Learning Management System.
                            </DialogDescription>
                        </DialogHeader>
                        <AddUserForm />
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <FolderPlus className="mr-2 h-4 w-4" />
                            Create Batch
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:w-[90%] md:w-[525px] lg:w-[690px] max-h-[80vh] flex flex-col">
                        <DialogHeader>
                            <DialogTitle>Create Batch</DialogTitle>
                            <DialogDescription>
                                Create a new Batch in the Learning Management System.
                            </DialogDescription>
                        </DialogHeader>
                        <CreateBatchForm />
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <BookPlus className="mr-2 h-4 w-4" />
                            Assign Course
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:w-[90%] md:w-[525px] lg:w-[690px] max-h-[80vh] flex flex-col">
                        <DialogHeader>
                            <DialogTitle>Assign Course</DialogTitle>
                            <DialogDescription>
                                Assign a new Course in the Learning Management System.
                            </DialogDescription>
                        </DialogHeader>
                        <AssignCourseDialog />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
};