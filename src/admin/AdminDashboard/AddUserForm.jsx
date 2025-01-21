import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { data } from "autoprefixer"


const userFormSchema = z.object({
    role: z.enum(["teacher", "student"], {
        required_error: "You need to select a user role.",
    }),
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    phoneNumber: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    expertiseArea: z.string().optional(),
    enrollmentNumber: z.string().optional(),
    batch: z.string().optional(),
})


const defaultValues = {
    role: "student",
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    expertiseArea: "",
    enrollmentNumber: "",
    batch: "",
}

function AddUserForm() {
    const [role, setRole] = useState("student")

    const form = useForm({
        resolver: zodResolver(userFormSchema),
        defaultValues,
    });

    function onSubmit() {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <div className="flex-1 overflow-y-auto pr-4">
            <div className="space-y-6 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto pr-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User Role</FormLabel>
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                setRole(value);
                                            }}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a user role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="teacher">Teacher</SelectItem>
                                                <SelectItem value="student">Student</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Select whether the new user is a teacher or a student.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the full name of the user.
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
                                            <Input placeholder="john.doe@example.com" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the email address of the user.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter a password for the user (minimum 8 characters).
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+1234567890" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the phone number of the user.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {role === "teacher" && (
                                <FormField
                                    control={form.control}
                                    name="expertiseArea"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Expertise Area</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g., Mathematics, Computer Science" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the {"teacher's"} area of expertise or subject.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            {role === "student" && (
                                <FormField
                                    control={form.control}
                                    name="enrollmentNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Enrollment Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g., ST2023001" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the {"student's"} enrollment number or ID.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={form.control}
                                name="batch"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Assign to Batch</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a batch" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="batch1">Batch 1</SelectItem>
                                                <SelectItem value="batch2">Batch 2</SelectItem>
                                                <SelectItem value="batch3">Batch 3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {role === "student"
                                                ? "Assign the student to a batch (mandatory)."
                                                : "Optionally assign the teacher to a batch."}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <div className="flex justify-between pt-4 border-t">
                        <Button type="button" onClick={form.handleSubmit(onSubmit)}>Save & Notify</Button>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                </div>
            </div>
        </div>
    )
}


export default AddUserForm;