import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IndividualAttendance from "./IndividualAttendance"
import BatchAttendance from "./BatchAttendance"
import CourseAttendance from "./CourseAttendance"
import { Button } from "@/components/ui/button"
import { Upload, Download } from 'lucide-react'
import DateRangePicker from "@/components/ui/date-range-picker"



function AdminAttendanceManagement() {
    const [activeTab, setActiveTab] = useState("individual")
    const [dateRange, setDateRange] = useState({ from: new Date(), to: new Date() })

    const handleBulkUpload = () => {
        console.log("Bulk upload attendance")
        // Implement bulk upload functionality
    }

    const handleExport = () => {
        console.log("Export attendance data")
        // Implement export functionality
    }

    return (
        <div className="w-full space-y-6 p-10 pb-16">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Attendance Management</h2>
                <p className="text-muted-foreground">
                    Track and manage attendance for students and teachers.
                </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <TabsList className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-0 md:flex-1">
                        <TabsTrigger value="individual">Individual</TabsTrigger>
                        <TabsTrigger value="batch">Batch-wise</TabsTrigger>
                        <TabsTrigger value="course">Course-wise</TabsTrigger>
                    </TabsList>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-2 items-start md:items-center">
                        <DateRangePicker
                            from={dateRange.from}
                            to={dateRange.to}
                            onSelect={setDateRange}
                        />
                        <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={handleBulkUpload} className="mb-2 sm:mb-0">
                                <Upload className="mr-2 h-4 w-4" />
                                Bulk Upload
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleExport} className="mb-2 sm:mb-0">
                                <Download className="mr-2 h-4 w-4" />
                                Export Data
                            </Button>
                        </div>
                    </div>
                </div>
                <TabsContent value="individual" className="space-y-4">
                    <IndividualAttendance dateRange={dateRange} />
                </TabsContent>
                <TabsContent value="batch" className="space-y-4">
                    <BatchAttendance dateRange={dateRange} />
                </TabsContent>
                <TabsContent value="course" className="space-y-4">
                    <CourseAttendance dateRange={dateRange} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default AdminAttendanceManagement;