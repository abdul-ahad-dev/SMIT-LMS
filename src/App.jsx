import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Student from './student/student'
import Teacher from './teacher/teacher'
import Admin from './admin/admin'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/student' element={<Student />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
