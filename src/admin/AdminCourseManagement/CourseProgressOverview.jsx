import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Mock data for demonstration
const courses = [
    { id: 1, name: "Introduction to React", batches: ["Batch A", "Batch B"] },
    { id: 2, name: "Advanced JavaScript", batches: ["Batch C"] },
    { id: 3, name: "Python for Beginners", batches: ["Batch A"] },
]

const progressData = {
    "Introduction to React": {
        "Batch A": 75,
        "Batch B": 60,
    },
    "Advanced JavaScript": {
        "Batch C": 80,
    },
    "Python for Beginners": {
        "Batch A": 40,
    },
}

function CourseProgressOverview() {
    const [selectedCourse, setSelectedCourse] = useState(courses[0].id.toString())

    const selectedCourseData = courses.find((course) => course.id.toString() === selectedCourse)

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
                <h3 className="text-lg font-medium">Select Course:</h3>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                        {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id.toString()}>
                                {course.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {selectedCourseData && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {selectedCourseData.batches.map((batch) => (
                        <Card key={batch}>
                            <CardHeader>
                                <CardTitle>{batch}</CardTitle>
                                <CardDescription>{selectedCourseData.name}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-4">
                                    <Progress value={progressData[selectedCourseData.name][batch]} className="w-full" />
                                    <span className="text-sm font-medium">
                                        {progressData[selectedCourseData.name][batch]}%
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}


export default CourseProgressOverview;