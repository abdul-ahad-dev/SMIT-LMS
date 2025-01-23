import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

function StudentAttendance() {


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
  return (
    <div className="w-full flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="space-y-4">
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
          <Card className="col-span-3 h-60">
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
    </div>
  )
}

export default StudentAttendance