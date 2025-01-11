import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BatchList from "./BatchList"
import AddBatchForm from "./AddBatchForm"
import PerformanceAttendanceTracking from "./PerformanceAttendanceTracking"
import { Button } from "@/components/ui/button"
import { Upload, Download } from 'lucide-react'
import BatchDetailsModal from "./BatchDetailsModal"
import AssignStudentsTeachersModal from "./AssignStudentsTeachersModal"



function AdminBatchManagement() {
	const [activeTab, setActiveTab] = useState("batches")
	const [showBatchDetailsModal, setShowBatchDetailsModal] = useState(false)
	const [showAssignModal, setShowAssignModal] = useState(false)
	const [selectedBatch, setSelectedBatch] = useState(null)

	const handleViewDetails = (batch) => {
		setSelectedBatch(batch)
		setShowBatchDetailsModal(true)
	}

	const handleAssignStudentsTeachers = (batch) => {
		setSelectedBatch(batch)
		setShowAssignModal(true)
	}

	return (
		<div className="w-full space-y-6 p-10 pb-16">
			<div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Batch Management</h2>
				<p className="text-muted-foreground">
					Create, organize, and monitor batches within the Learning Management System.
				</p>
			</div>
			<Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
				<div className="flex flex-wrap justify-between items-center">
					<TabsList className="w-full sm:w-auto">
						<TabsTrigger value="batches">Batches</TabsTrigger>
						<TabsTrigger value="add-batch">Add Batch</TabsTrigger>
						<TabsTrigger value="performance">Performance & Attendance</TabsTrigger>
					</TabsList>
					<div className="flex flex-wrap space-x-2 mt-2 sm:mt-0">
						<Button variant="outline" size="sm">
							<Upload className="mr-2 h-4 w-4" />
							Bulk Upload
						</Button>
						<Button variant="outline" size="sm">
							<Download className="mr-2 h-4 w-4" />
							Export Data
						</Button>
					</div>
				</div>
				<TabsContent value="batches" className="space-y-4">
					<BatchList onViewDetails={handleViewDetails} onAssign={handleAssignStudentsTeachers} />
				</TabsContent>
				<TabsContent value="add-batch" className="space-y-4">
					<AddBatchForm />
				</TabsContent>
				<TabsContent value="performance" className="space-y-4">
					<PerformanceAttendanceTracking />
				</TabsContent>
			</Tabs>
			{selectedBatch && (
				<>
					<BatchDetailsModal
						open={showBatchDetailsModal}
						onOpenChange={setShowBatchDetailsModal}
						batch={selectedBatch}
					/>
					<AssignStudentsTeachersModal
						open={showAssignModal}
						onOpenChange={setShowAssignModal}
						batch={selectedBatch}
					/>
				</>
			)}
		</div>
	)
}

export default AdminBatchManagement;