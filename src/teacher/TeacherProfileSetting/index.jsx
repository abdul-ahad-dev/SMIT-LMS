import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const accountFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    currentPassword: z.string().min(8, {
        message: "Current password is required.",
    }),
    newPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

const defaultValues = {
    name: "John Doe",
    email: "johndoe@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
}

const activityLogs = [
    { id: 1, dateTime: "2024-12-26 10:30 AM", description: "Logged in from 192.168.1.1" },
    { id: 2, dateTime: "2024-12-25 03:45 PM", description: "Password changed" },
    { id: 3, dateTime: "2024-12-24 09:15 AM", description: "Profile information updated" },
    { id: 4, dateTime: "2024-12-23 11:20 AM", description: "Logged in from 10.0.0.1" },
    { id: 5, dateTime: "2024-12-22 02:00 PM", description: "Email address verified" },
];

function TeacherProfileSetting() {
    const [isEmailEditable, setIsEmailEditable] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const logsPerPage = 3

    const form = useForm({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    })

    function onSubmit(data) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    const indexOfLastLog = currentPage * logsPerPage
    const indexOfFirstLog = indexOfLastLog - logsPerPage
    const currentLogs = activityLogs.slice(indexOfFirstLog, indexOfLastLog)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const clearLogs = () => {
        toast({
            title: "Logs Cleared",
            description: "All activity logs have been cleared.",
        })
        // In a real application, you would clear the logs from the backend here
    }

    return (
        <div className="space-y-6 p-10 pb-16">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Profile Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account information and activity logs.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your full name" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is the name that will be displayed on your profile and in emails.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center space-x-2">
                                                <Input
                                                    placeholder="Your email address"
                                                    {...field}
                                                    disabled={!isEmailEditable}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => setIsEmailEditable(!isEmailEditable)}
                                                >
                                                    {isEmailEditable ? "Lock" : "Edit"}
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            {isEmailEditable
                                                ? "You can now edit your email address. Don't forget to verify the new email."
                                                : "Your email address is used for login and notifications."}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="currentPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Your current password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter your current password to make changes.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Your new password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter a new password if you want to change it.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm New Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Confirm your new password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Re-enter your new password to confirm.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end space-x-4">
                                <Button type="button" variant="outline" onClick={() => form.reset()}>
                                    Cancel
                                </Button>
                                <Button type="submit">Save Changes</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Activity Logs</CardTitle>
                    <CardDescription>Recent account activities for accountability.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date & Time</TableHead>
                                <TableHead>Activity Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentLogs.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell>{log.dateTime}</TableCell>
                                    <TableCell>{log.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4 flex items-center justify-between">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                                </PaginationItem>
                                {[...Array(Math.ceil(activityLogs.length / logsPerPage))].map((_, index) => (
                                    <PaginationItem key={index}>
                                        <PaginationLink onClick={() => paginate(index + 1)} isActive={currentPage === index + 1}>
                                            {index + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <PaginationNext onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(activityLogs.length / logsPerPage)} />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                        <Button variant="outline" onClick={clearLogs}>Clear Logs</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TeacherProfileSetting;