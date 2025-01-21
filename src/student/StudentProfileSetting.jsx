function StudentProfileSetting() {
  return (
    <div className="flex justify-center ml-72 items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-2 gap-8">
        {/* Left Section (Avatar) */}
        <div className="flex justify-center items-center">
          <img
            className="w-56 h-56 rounded-full border-4 border-indigo-500"
            src="https://via.placeholder.com/150"
          />
        </div>

        {/* Right Section (Profile Info) */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">John Doe</h2>
          <p className="text-xl text-gray-500 mb-6">Student at XYZ University</p>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-800">johndoe@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Enrollment Date:</span>
              <span className="text-gray-800">Jan 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Course:</span>
              <span className="text-gray-800">Web Development</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="text-gray-800">+1234567890</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Address:</span>
              <span className="text-gray-800">123 Main St, City, Country</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-gray-800">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfileSetting