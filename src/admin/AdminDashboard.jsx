import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, GraduationCap, Users, BookOpen, AlertCircle, UserPlus, BookPlus, FolderPlus } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddUserForm from "./components/AddUserForm"
import CreateBatchForm from "./components/CreateBatchForm"
import { AssignCourseDialog } from "./components/AssignCourseDialog"


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

  return (
    <div className="w-screen flex-1 space-y-4 p-4 md:p-8 pt-6">

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
                <FolderPlus  className="mr-2 h-4 w-4" />
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
                Batch 'Web Development 101' starts next week.
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