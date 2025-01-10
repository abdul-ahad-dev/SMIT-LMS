import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { StudentPerformanceReport } from "./student-performance-report"
import { TeacherPerformanceReport } from "./teacher-performance-report"
import { BatchProgressReport } from "./batch-progress-report"
import { Download, FileSpreadsheet } from 'lucide-react'


export default function Reports() {
	const [role, setRole] = useState < "student" | "teacher" | "batch" > ("student")
	const [batch, setBatch] = useState("")
	const [course, setCourse] = useState("")
	const [dateRange, setDateRange] = useState({
		from: new Date(new Date().setMonth(new Date().getMonth() - 1)),
		to: new Date(),
	})

	const handleGenerateReport = () => {
		console.log("Generating report with filters:", { role, batch, course, dateRange })
		// Here you would typically fetch the report data based on the selected filters
	}

	const handleExportPDF = () => {
		console.log("Exporting report as PDF")
		// Implement PDF export functionality
	}

	const handleExportExcel = () => {
		console.log("Exporting report as Excel")
		// Implement Excel export functionality
	}

	return (
		<div className="space-y-6 p-10 pb-16">
			<div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Reports</h2>
				<p className="text-muted-foreground">
					Generate and view comprehensive reports for students, teachers, and batches.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Report Filters</CardTitle>
					<CardDescription>Select parameters to generate your report</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex flex-wrap gap-4">
						<Select value={role} onValueChange={(value) => setRole(value)}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select role" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="student">Student</SelectItem>
								<SelectItem value="teacher">Teacher</SelectItem>
								<SelectItem value="batch">Batch</SelectItem>
							</SelectContent>
						</Select>

						<Select value={batch} onValueChange={setBatch}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select batch" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="batch-a">Batch A</SelectItem>
								<SelectItem value="batch-b">Batch B</SelectItem>
								<SelectItem value="batch-c">Batch C</SelectItem>
							</SelectContent>
						</Select>

						<Select value={course} onValueChange={setCourse}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select course" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="course-1">Web Development</SelectItem>
								<SelectItem value="course-2">Data Science</SelectItem>
								<SelectItem value="course-3">Mobile App Development</SelectItem>
							</SelectContent>
						</Select>

						<DateRangePicker
							from={dateRange.from}
							to={dateRange.to}
							onSelect={(range) => {
								if (range?.from && range?.to) {
									setDateRange({ from: range.from, to: range.to })
								}
							}}
						/>
					</div>

					<div className="flex gap-4">
						<Button onClick={handleGenerateReport}>Generate Report</Button>
						<Button variant="outline" onClick={handleExportPDF}>
							<Download className="mr-2 h-4 w-4" />
							Export as PDF
						</Button>
						<Button variant="outline" onClick={handleExportExcel}>
							<FileSpreadsheet className="mr-2 h-4 w-4" />
							Export to Excel
						</Button>
					</div>
				</CardContent>
			</Card>

			{role === "student" && <StudentPerformanceReport />}
			{role === "teacher" && <TeacherPerformanceReport />}
			{role === "batch" && <BatchProgressReport />}
		</div>
	)
};