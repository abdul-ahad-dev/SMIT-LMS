import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Teacher from './teacher/teacher'
import Admin from './admin/admin'
import Login from './Login'
import Student from './student'
import StudentDashboard from './student/StudentDashboard'
import StudentCourse from './student/StudentCourse'
import StudentAttendance from './student/StudentAttendance'
import StudentProfileSetting from './student/StudentProfileSetting'
import StudentProgress from './student/StudentProgress'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route index element={<Login />} />

        {/* Student Sub-Routes */}
        <Route path="/student" element={<Student />}>
          <Route path="dashboard" index element={<StudentDashboard />} />
          <Route path="course" element={<StudentCourse />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="progress" element={<StudentProgress />} />
          <Route path="setting" element={<StudentProfileSetting />} />
        </Route>

        <Route path='/teacher' element={<Teacher />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
