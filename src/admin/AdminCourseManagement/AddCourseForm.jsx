import { useState } from "react"
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


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Course name must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    duration: z.string().min(1, {
        message: "Duration is required.",
    }),
    prerequisites: z.string().optional(),
    resources: z.string().optional(),
})

function AddCourseForm() {
    const [topics, setTopics] = useState([])
    const [newTopic, setNewTopic] = useState("")

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            duration: "",
            prerequisites: "",
            resources: "",
        },
    })

    function onSubmit(values) {
        console.log(values, topics)
        // Here you would typically send this data to your backend
    }

    const addTopic = () => {
        if (newTopic.trim() !== "") {
            setTopics([...topics, newTopic.trim()])
            setNewTopic("")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter course name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Provide a unique and descriptive title for the course.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter course description"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Provide a brief overview of the course objectives.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., 8 weeks, 3 months, 40 hours" {...field} />
                            </FormControl>
                            <FormDescription>
                                Specify the total duration of the course.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="prerequisites"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Prerequisites (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter prerequisites" {...field} />
                            </FormControl>
                            <FormDescription>
                                List any required prior knowledge or skills.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="resources"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Resources</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter resource links or file names" {...field} />
                            </FormControl>
                            <FormDescription>
                                Provide links or file names for course resources.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    <FormLabel>Course Outline</FormLabel>
                    <div className="flex items-center space-x-2">
                        <Input
                            placeholder="Enter topic"
                            value={newTopic}
                            onChange={(e) => setNewTopic(e.target.value)}
                        />
                        <Button type="button" onClick={addTopic}>Add Topic</Button>
                    </div>
                    <ul className="list-disc list-inside mt-2">
                        {topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </div>
                <Button type="submit">Save Course</Button>
            </form>
        </Form>
    )
}


export default AddCourseForm;