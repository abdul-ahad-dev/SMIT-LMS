import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Login'

import Student from './student'
import StudentDashboard from './student/studentdashboard/StudentDashboard'
import StudentCourse from './student/studentcourses/StudentCourse'
import StudentAttendance from './student/studentattendance/StudentAttendance'
import StudentProfileSetting from './student/StudentProfileSetting'
import StudentProgress from './student/StudentProgress'

import Teacher from './teacher'
import TeacherDashboard from './teacher/TeacherDashboard'
import TeacherBatches from './teacher/TeacherBatches'
import TeacherCourses from './teacher/TeacherCourses'
import TeacherAssignment from './teacher/TeacherAssigment'
import TeacherProfileSetting from './teacher/TeacherProfileSetting'

import Admin from './admin'
import AdminDashboard from './admin/AdminDashboard'
import AdminBatchManagement from './admin/AdminBatchManagement'
import AdminCourseManagement from './admin/AdminCourseManagement'
import AdminAttendanceManagement from './admin/AdminAttendanceManagement'
import Report from './admin/Reports'
import AdminProfileSetting from './admin/AdminProfileSetting'
import StudentAssignment from './student/StudentAssignment'
import AdminUserManagement from './admin/AdminUserManagement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route index element={<Login />} />

        {/* Student Sub-Routes */}
        <Route path="/student" element={<Student />}>
          <Route path="dashboard" index element={<StudentDashboard />} />
          <Route path="assignment" index element={<StudentAssignment />} />
          <Route path="course" element={<StudentCourse />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="progress" element={<StudentProgress />} />
          <Route path="setting" element={<StudentProfileSetting />} />
        </Route>

        {/* Teacher Sub-Routes */}
        <Route path='/teacher' element={<Teacher />} >
          <Route path="dashboard" index element={<TeacherDashboard />} />
          <Route path="batch" element={<TeacherBatches />} />
          <Route path="course" element={<TeacherCourses />} />
          <Route path="assignment" element={<TeacherAssignment />} />
          <Route path="setting" element={<TeacherProfileSetting />} />
        </Route>

        {/* Admin Sub-Routes */}
        <Route path='/admin' element={<Admin />} >
          <Route path="dashboard" index element={<AdminDashboard />} />
          <Route path="user-management" element={<AdminUserManagement />} />
          <Route path="course-management" element={<AdminCourseManagement />} />
          <Route path="batch-management" element={<AdminBatchManagement />} />
          <Route path="attendance" element={<AdminAttendanceManagement />} >
            <Route path="student" element={<AdminBatchManagement />} />
            <Route path="teacher" element={<AdminBatchManagement />} />
          </Route>
          <Route path="report" element={<Report />} />
          <Route path="setting" element={<AdminProfileSetting />} />
        </ Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;