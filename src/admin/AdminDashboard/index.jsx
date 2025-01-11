import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis,  } from "recharts"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, GraduationCap, Users, BookOpen, AlertCircle } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import AnalyticsSection from "./AnalyticsSection"
import DashboardHeader from "./DashboardHeader"


function AdminDashboard() {

    const data = [
        {
            name: "Jan",
            total: 45,
        },
        {
            name: "Feb",
            total: 52,
        },
        {
            name: "Mar",
            total: 61,
        },
        {
            name: "Apr",
            total: 58,
        },
        {
            name: "May",
            total: 65,
        },
        {
            name: "Jun",
            total: 70,
        },
        {
            name: "Jul",
            total: 68,
        },
    ];

    const topPerformers = [
        { name: "John Doe", course: "Web Development", score: 98 },
        { name: "Jane Smith", course: "Data Science", score: 96 },
        { name: "Bob Johnson", course: "Mobile App Development", score: 95 },
        { name: "Alice Brown", course: "Machine Learning", score: 94 },
        { name: "Charlie Davis", course: "UI/UX Design", score: 93 },
    ];

    const recentActivities = [
        {
            name: "John Doe",
            activity: "Completed 'Introduction to Python' course",
            time: "2h ago",
            avatar: "/avatars/01.png",
        },
        {
            name: "Jane Smith",
            activity: "Submitted assignment for 'Web Development Basics'",
            time: "4h ago",
            avatar: "/avatars/02.png",
        },
        {
            name: "Alice Johnson",
            activity: "Joined 'Machine Learning' batch",
            time: "6h ago",
            avatar: "/avatars/03.png",
        },
        {
            name: "Bob Williams",
            activity: "Started 'Data Structures and Algorithms' course",
            time: "8h ago",
            avatar: "/avatars/04.png",
        },
        {
            name: "Emma Brown",
            activity: "Achieved 100% attendance this month",
            time: "1d ago",
            avatar: "/avatars/05.png",
        },
    ];



    return (
        <div className="w-full flex-1 space-y-4 p-4 md:p-8 pt-6">
            <DashboardHeader />
            

            {/* Overview Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Students
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Teachers
                        </CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">56</div>
                        <p className="text-xs text-muted-foreground">
                            +2 new this month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Batches
                        </CardTitle>
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32</div>
                        <p className="text-xs text-muted-foreground">
                            +3 from last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Courses
                        </CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">78</div>
                        <p className="text-xs text-muted-foreground">
                            +5 new courses added
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Analytics Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Student Progress Overview</CardTitle>
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
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={activity.avatar} alt="Avatar" />
                                        <AvatarFallback>{activity.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">{activity.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {activity.activity}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">{activity.time}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>


            {/* Reports Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Top Performers</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Course</TableHead>
                                <TableHead>Score</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topPerformers.map((student) => (
                                <TableRow key={student.name}>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.course}</TableCell>
                                    <TableCell>{student.score}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>


            {/* Analytics Section */}
            <AnalyticsSection />


            {/* Notifications Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                3 teachers are yet to be assigned to batches.
                            </AlertDescription>
                        </Alert>
                        <Alert className="mt-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Reminder</AlertTitle>
                            <AlertDescription>
                                Batch {"'Web"} Development {"101'"} starts next week.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="font-medium">Avg. Attendance Rate:</div>
                                <div className="ml-auto font-bold">87%</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Course Completion Rate:</div>
                                <div className="ml-auto font-bold">72%</div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium">Student Satisfaction:</div>
                                <div className="ml-auto font-bold">4.6/5</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

export default AdminDashboard