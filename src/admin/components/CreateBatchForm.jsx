import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CalendarIcon, Loader2 } from 'lucide-react'
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { data } from "autoprefixer"

const batchFormSchema = z.object({
  batchName: z.string().min(2, {
    message: "Batch name must be at least 2 characters.",
  }),
  startDate: z.date({
    required_error: "A start date is required.",
  }),
  endDate: z.date({
    required_error: "An end date is required.",
  }),
  courses: z.array(z.string()).min(1, {
    message: "Please select at least one course.",
  }),
  teachers: z.array(z.string()).min(1, {
    message: "Please assign at least one teacher.",
  }),
  students: z.array(z.string()),
  status: z.boolean().default(true),
})


// This would come from your API or database
const coursesData = [
  { id: "course1", name: "Introduction to Programming" },
  { id: "course2", name: "Web Development Fundamentals" },
  { id: "course3", name: "Data Structures and Algorithms" },
]

const teachersData = [
  { id: "teacher1", name: "John Doe" },
  { id: "teacher2", name: "Jane Smith" },
  { id: "teacher3", name: "Bob Johnson" },
]

const studentsData = [
  { id: "student1", name: "Alice Brown" },
  { id: "student2", name: "Charlie Davis" },
  { id: "student3", name: "Eva Fischer" },
]

export default function CreateBatchForm() {
  const [isUploading, setIsUploading] = useState(false)

  const form = useForm({
    resolver: zodResolver(batchFormSchema),
    defaultValues: {
      batchName: "",
      courses: [],
      teachers: [],
      students: [],
      status: true,
    },
  })

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

  const handleFileUpload = () => {
    setIsUploading(true)
    // Simulating file upload
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "File uploaded successfully",
        description: "Student list has been updated.",
      })
    }, 2000)
  }

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <div className="space-y-6 flex flex-col h-full">
        <div className="flex-1 overflow-y-auto pr-4">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="batchName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Batch Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Batch A - 2024" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a unique identifier for the batch.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full sm:w-[240px]">
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
                    <FormItem className="flex flex-col w-full sm:w-[240px]">
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
                        The estimated end date of the batch.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="courses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assign Courses</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange([...field.value, value])}
                        value={field.value[field.value.length - 1]}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select courses" />
                        </SelectTrigger>
                        <SelectContent>
                          {coursesData.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.name}
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
                      {field.value.map((courseId) => (
                        <Badge key={courseId} variant="secondary" className="mr-2 mb-2">
                          {coursesData.find((c) => c.id === courseId)?.name}
                          <button
                            className="ml-1 text-xs"
                            onClick={() => field.onChange(field.value.filter((id) => id !== courseId))}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="teachers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assign Teachers</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange([...field.value, value])}
                        value={field.value[field.value.length - 1]}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select teachers" />
                        </SelectTrigger>
                        <SelectContent>
                          {teachersData.map((teacher) => (
                            <SelectItem key={teacher.id} value={teacher.id}>
                              {teacher.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Assign one or more teachers to this batch.
                    </FormDescription>
                    <FormMessage />
                    <div className="mt-2">
                      {field.value.map((teacherId) => (
                        <Badge key={teacherId} variant="secondary" className="mr-2 mb-2">
                          {teachersData.find((t) => t.id === teacherId)?.name}
                          <button
                            className="ml-1 text-xs"
                            onClick={() => field.onChange(field.value.filter((id) => id !== teacherId))}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="students"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assign Students</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange([...field.value, value])}
                        value={field.value[field.value.length - 1]}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select students" />
                        </SelectTrigger>
                        <SelectContent>
                          {studentsData.map((student) => (
                            <SelectItem key={student.id} value={student.id}>
                              {student.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Assign students to this batch or upload a list.
                    </FormDescription>
                    <FormMessage />
                    <div className="mt-2">
                      {field.value.map((studentId) => (
                        <Badge key={studentId} variant="secondary" className="mr-2 mb-2">
                          {studentsData.find((s) => s.id === studentId)?.name}
                          <button
                            className="ml-1 text-xs"
                            onClick={() => field.onChange(field.value.filter((id) => id !== studentId))}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Input
                        type="file"
                        onChange={handleFileUpload}
                        accept=".csv,.xlsx,.xls"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Upload a CSV or Excel file with student details.
                      </p>
                      {isUploading && (
                        <div className="flex items-center mt-2">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Uploading...</span>
                        </div>
                      )}
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Batch Status
                      </FormLabel>
                      <FormDescription>
                        Set the batch as active or inactive.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="submit">Save & Notify</Button>
                <Button type="button" variant="outline" onClick={() => form.reset()}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
          <Card>
            <CardHeader>
              <CardTitle>Batch Details Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

