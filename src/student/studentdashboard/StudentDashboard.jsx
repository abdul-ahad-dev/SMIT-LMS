import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { CalendarDays, GraduationCap, Users, BookOpen } from 'lucide-react'
import { Bar, BarChart,Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

function StudentDashboard() {
    const data = [
        {
            name: "Jan",
            total: 30,
        },
        {
            name: "Feb",
            total: 48,
        },
        {
            name: "Mar",
            total: 42,
        },
        {
            name: "Apr",
            total: 54,
        },
        {
            name: "May",
            total: 72,
        },
        {
            name: "Jun",
            total: 75,
        },
        {
            name: "Jul",
            total: 87,
        },
    ];

    const recentActivities = [
        {
            title: "Last Login",
            description: "Displays the student's most recent login.",
            date: "2 Days Ago",
        },
        {
            title: "Recent Assignment Submitted",
            description: "Last Assignment Done by",
            date: "3 Days Ago",
        },
        {
            title: "Courses Accessed",
            description: "Last course viewed or interacted with",
            date: "3 Days Ago",
        },

    ]

    const courseCompletionData = [
        { name: "Web Dev", completed: 45, ongoing: 55 },
        { name: "Data Science", completed: 56, ongoing: 44 },
        { name: "UI/UX", completed: 70, ongoing: 30 },
        { name: "Mobile Dev", completed: 35, ongoing: 65 },
        { name: "AI/ML", completed: 49, ongoing: 51 },
    ]

    const performanceData = [
        { week: "Week 1", currentScore: 75, previousScore: 70 },
        { week: "Week 2", currentScore: 80, previousScore: 75 },
        { week: "Week 3", currentScore: 78, previousScore: 80 },
        { week: "Week 4", currentScore: 85, previousScore: 78 },
        { week: "Week 5", currentScore: 88, previousScore: 85 },
      ]
    return (
        <div className="w-full flex-1 space-y-4 p-4 md:p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className='w-72'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <CardTitle className="text-sm font-medium">
                            Total Assignments
                        </CardTitle>
                        <Users className="h-4 w-4 mx-[-10px] text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10</div>
                        <p className="text-xs text-muted-foreground my-2">
                            +3 new this month
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-72'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Assignments Completed
                        </CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">6</div>
                        <p className="text-xs text-muted-foreground my-3">
                            +2 done this week
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-72'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Upcoming Deadline
                        </CardTitle>
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">25-1-2025</div>
                        <p className="text-xs text-muted-foreground my-3">
                            In 3 Days
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-72'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Courses
                        </CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">78</div>
                        <p className="text-xs text-muted-foreground my-3">
                            +5 new courses added
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Your Progress Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={data}>
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}%`}
                                />
                                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Extended Analytics Section */}
                        <div className="space-y-8">
                            {recentActivities.map((activity, index) => (
                                <div className="flex items-center" key={index}>
                                    <div className="ml-4 my-6 space-y-1">
                                        <p className="text-md font-medium leading-none">{index + 1} {activity.title}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {activity.description}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">{activity.date}</div>
                                </div>
                            ))}
                        </div>
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
                        <div className="space-y-10">
                            <div className="flex items-center">
                                <div className="font-medium">Your Average Attendance Rate:</div>
                                <div className="ml-auto font-bold">81%</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Overall Course Completion:</div>
                                <div className="ml-auto font-bold">62%</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Student Satisfaction:</div>
                                <div className="ml-auto font-bold">4.1/5</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Teacher Engagement:</div>
                                <div className="ml-auto font-bold">92%</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-5">
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
        </div>
    )
}

export default StudentDashboard