import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



const attendanceData = [
    { name: "Mon", attendance: 85, average: 80 },
    { name: "Tue", attendance: 88, average: 82 },
    { name: "Wed", attendance: 90, average: 85 },
    { name: "Thu", attendance: 92, average: 88 },
    { name: "Fri", attendance: 89, average: 86 },
]

const performanceData = [
    { week: "Week 1", currentScore: 75, previousScore: 70 },
    { week: "Week 2", currentScore: 80, previousScore: 73 },
    { week: "Week 3", currentScore: 78, previousScore: 76 },
    { week: "Week 4", currentScore: 85, previousScore: 79 },
    { week: "Week 5", currentScore: 88, previousScore: 82 },
]

const courseCompletionData = [
    { name: "Web Dev", completed: 68, ongoing: 32 },
    { name: "Data Science", completed: 72, ongoing: 28 },
    { name: "UI/UX", completed: 58, ongoing: 42 },
    { name: "Mobile Dev", completed: 75, ongoing: 25 },
    { name: "AI/ML", completed: 62, ongoing: 38 },
]


export default function T_AnalyticsSection() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
                <Select defaultValue="thisWeek">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="thisWeek">This Week</SelectItem>
                        <SelectItem value="thisMonth">This Month</SelectItem>
                        <SelectItem value="thisYear">This Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Weekly Attendance</CardTitle>
                        <CardDescription>Daily attendance compared to average</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={attendanceData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="attendance" name="Attendance" fill="#adfa1d" />
                                <Bar dataKey="average" name="Average" fill="#888888" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Student Performance Trend</CardTitle>
                        <CardDescription>Current vs Previous Period</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="currentScore" name="Current" stroke="#adfa1d" />
                                <Line type="monotone" dataKey="previousScore" name="Previous" stroke="#888888" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Course Completion Rates</CardTitle>
                        <CardDescription>Completed vs Ongoing for each course</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={courseCompletionData} layout="vertical">
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="completed" name="Completed" fill="#adfa1d" stackId="a" />
                                <Bar dataKey="ongoing" name="Ongoing" fill="#888888" stackId="a" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Key Metrics</CardTitle>
                        <CardDescription>Overview of important statistics</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="font-medium">Average Attendance Rate:</div>
                                <div className="ml-auto font-bold">87%</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Overall Course Completion:</div>
                                <div className="ml-auto font-bold">72%</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Student Satisfaction:</div>
                                <div className="ml-auto font-bold">4.6/5</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Teacher Engagement:</div>
                                <div className="ml-auto font-bold">92%</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};