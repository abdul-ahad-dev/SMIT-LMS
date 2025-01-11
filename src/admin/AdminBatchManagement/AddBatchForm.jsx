// import { useState } from "react"
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
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Batch name must be at least 2 characters.",
    }),
    startDate: z.date({
        required_error: "Start date is required.",
    }),
    endDate: z.date({
        required_error: "End date is required.",
    }),
    teachers: z.array(z.string()).min(1, {
        message: "At least one teacher must be assigned.",
    }),
    courses: z.array(z.string()).min(1, {
        message: "At least one course must be assigned.",
    }),
    description: z.string().optional(),
})

// Mock data for demonstration
const teacherOptions = [
    { value: "john-doe", label: "John Doe" },
    { value: "jane-smith", label: "Jane Smith" },
    { value: "bob-johnson", label: "Bob Johnson" },
]

const courseOptions = [
    { value: "react-basics", label: "React Basics" },
    { value: "javascript-advanced", label: "JavaScript Advanced" },
    { value: "python-beginners", label: "Python for Beginners" },
    { value: "data-structures", label: "Data Structures" },
    { value: "algorithms", label: "Algorithms" },
]

function AddBatchForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            teachers: [],
            courses: [],
            description: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
        // Here you would typically send this data to your backend
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Batch Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter batch name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Provide a unique name or ID for the batch.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Start Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                The start date of the batch.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>End Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                The end date of the batch.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="teachers"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Assigned Teacher(s)</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={(value) => field.onChange([...field.value, value])}
                                    value={field.value[field.value.length - 1]}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select teachers" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {teacherOptions.map((teacher) => (
                                            <SelectItem key={teacher.value} value={teacher.value}>
                                                {teacher.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                Select one or more teachers for this batch.
                            </FormDescription>
                            <FormMessage />
                            <div className="mt-2">
                                {field.value.map((teacher) => (
                                    <Button
                                        key={teacher}
                                        variant="secondary"
                                        size="sm"
                                        className="mr-2 mb-2"
                                        onClick={() => field.onChange(field.value.filter((t) => t !== teacher))}
                                    >
                                        {teacherOptions.find((t) => t.value === teacher)?.label} ✕
                                    </Button>
                                ))}
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="courses"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Assigned Courses</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={(value) => field.onChange([...field.value, value])}
                                    value={field.value[field.value.length - 1]}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select courses" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {courseOptions.map((course) => (
                                            <SelectItem key={course.value} value={course.value}>
                                                {course.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                Select one or more courses for this batch.
                            </FormDescription>
                            <FormMessage />
                            <div className="mt-2">
                                {field.value.map((course) => (
                                    <Button
                                        key={course}
                                        variant="secondary"
                                        size="sm"
                                        className="mr-2 mb-2"
                                        onClick={() => field.onChange(field.value.filter((c) => c !== course))}
                                    >
                                        {courseOptions.find((c) => c.value === course)?.label} ✕
                                    </Button>
                                ))}
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description (Optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter batch description"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Provide additional details about the batch.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Create Batch</Button>
            </form>
        </Form>
    )
}


export default AddBatchForm;