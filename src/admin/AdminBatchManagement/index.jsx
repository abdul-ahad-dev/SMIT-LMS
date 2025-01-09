import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BatchList } from "./batch-list"
import { AddBatchForm } from "./add-batch-form"
import { PerformanceAttendanceTracking } from "./performance-attendance-tracking"
import { Button } from "@/components/ui/button"
import { Plus, Upload, Download } from 'lucide-react'
import { BatchDetailsModal } from "./batch-details-modal"
import { AssignStudentsTeachersModal } from "./assign-students-teachers-modal"



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
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Batch Management</h2>
        <p className="text-muted-foreground">
          Create, organize, and monitor batches within the Learning Management System.
        </p>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="batches">Batches</TabsTrigger>
            <TabsTrigger value="add-batch">Add Batch</TabsTrigger>
            <TabsTrigger value="performance">Performance & Attendance</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2">
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

export default AdminBatchManagement