import { useState } from 'react'
import Login from './pages/Auth/Login'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DashboardCard from './components/DashboardCard'
import CourseCard from './components/CourseCard'
import CoursePage from './components/CoursePage'
import Profile from './components/Profile'
import Schedule from './components/Schedule'
import TeacherAssignments from './components/TeacherAssignments'
import TeacherCourses from './components/TeacherCourses'
import TeacherDashboard from './components/TeacherDashboard'
import TeacherStudents from './components/TeacherStudents'
import './App.css'

const stats = [
  { title: 'Active Courses', count: '12' },
  { title: 'Pending Assignments', count: '08' },
  { title: 'Live Classes', count: '03' },
  { title: 'Completion Rate', count: '86%' },
]

const courses = [
  {
    title: 'Java Programming',
    instructor: 'Satish Kumar',
    progress: 72,
    students: 42,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'DBMS',
    instructor: 'Priya Sharma',
    progress: 48,
    students: 36,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'Data Structures',
    instructor: 'Amit Verma',
    progress: 64,
    students: 51,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
]

const teacherStats = [
  { title: 'Courses Teaching', count: '03' },
  { title: 'Total Students', count: '129' },
  { title: 'Assignments Created', count: '18' },
]

const teacherStudents = [
  { name: 'Ankit Kumar', rollNo: 'SA-101', attendance: '92%', course: 'Java Programming' },
  { name: 'Riya Singh', rollNo: 'SA-102', attendance: '88%', course: 'DBMS' },
  { name: 'Mohit Verma', rollNo: 'SA-103', attendance: '76%', course: 'Data Structures' },
  { name: 'Neha Sharma', rollNo: 'SA-104', attendance: '95%', course: 'Java Programming' },
]

const assignments = [
  { title: 'Java OOP Worksheet', dueDate: '28 June 2026', status: 'Pending' },
  { title: 'DBMS ER Diagram', dueDate: '30 June 2026', status: 'Submitted' },
  { title: 'Stack Implementation', dueDate: '24 June 2026', status: 'Overdue' },
]

const scheduleClasses = [
  {
    time: '09:00 AM',
    title: 'Java Programming',
    instructor: 'Satish Kumar',
    platform: 'Room 101',
    status: 'Completed',
  },
  {
    time: '11:00 AM',
    title: 'DBMS',
    instructor: 'Priya Sharma',
    platform: 'Live Class',
    status: 'Live',
  },
  {
    time: '02:00 PM',
    title: 'Data Structures',
    instructor: 'Amit Verma',
    platform: 'Room 204',
    status: 'Upcoming',
  },
  {
    time: '04:00 PM',
    title: 'Assignment Doubt Session',
    instructor: 'Satish Kumar',
    platform: 'Google Meet',
    status: 'Upcoming',
  },
]

const studentProfile = {
  name: 'Ankit Kumar',
  phone: '+91 98765 43210',
  email: 'ankit@example.com',
  imageUrl: 'https://i.pravatar.cc/240?img=12',
  role: 'Student',
  course: 'Full Stack Web Development',
  studentId: 'SA-2026-108',
  batch: 'Morning Batch',
  address: 'Patna, Bihar',
  joined: 'June 2026',
}

const teacherProfile = {
  name: 'Satish Kumar',
  phone: '+91 98765 43210',
  email: 'satish@example.com',
  imageUrl: 'https://i.pravatar.cc/240?img=32',
  role: 'Teacher',
  course: 'Java Programming, DBMS, Data Structures',
  studentId: 'TCH-2026-014',
  batch: 'Morning and Evening Batches',
  address: 'Patna, Bihar',
  joined: 'January 2024',
}

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [activePage, setActivePage] = useState('Dashboard')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [uploadedFiles, setUploadedFiles] = useState({})
  const isProfilePage = activePage === 'Profile'
  const isTeacher = currentUser?.role === 'teacher'
  const activeProfile = isTeacher ? teacherProfile : studentProfile
  const displayName = currentUser?.username || activeProfile.name

  const handleNavigate = (page) => {
    setActivePage(page)
    if (page !== 'Courses') {
      setSelectedCourse(null)
    }
  }

  const handleLogin = (user) => {
    setCurrentUser(user)
    setActivePage('Dashboard')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setActivePage('Dashboard')
  }

  if (!currentUser) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="app-shell">
      <Navbar user={currentUser} onLogout={handleLogout} />
      <div className="app-body">
        <Sidebar
          activePage={activePage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          role={currentUser.role}
        />
        <main className="main-content">
          {isProfilePage ? (
            <Profile profile={activeProfile} />
          ) : isTeacher && activePage === 'Courses' ? (
            <TeacherCourses courses={courses} />
          ) : isTeacher && activePage === 'Students' ? (
            <TeacherStudents students={teacherStudents} />
          ) : isTeacher && activePage === 'Assignments' ? (
            <TeacherAssignments assignments={assignments} />
          ) : activePage === 'Schedule' ? (
            <Schedule classes={scheduleClasses} />
          ) : activePage === 'Courses' ? (
            <CoursePage
              courses={courses}
              selectedCourse={selectedCourse}
              onSelectCourse={setSelectedCourse}
              onBack={() => setSelectedCourse(null)}
            />
          ) : activePage === 'Assignments' ? (
            <section className="content-section">
              <div className="section-header">
                <div>
                  <p className="eyebrow">Assignments List</p>
                  <h2>Submit Assignment PDF</h2>
                </div>
              </div>

              <div className="assignment-list">
                {assignments.map((assignment) => (
                  <div className="assignment-row" key={assignment.title}>
                    <div>
                      <h3>{assignment.title}</h3>
                      <p>Due Date: {assignment.dueDate}</p>
                    </div>
                    <span className={`status-pill ${assignment.status.toLowerCase()}`}>
                      {assignment.status}
                    </span>
                    <label className="pdf-upload">
                      <input
                        type="file"
                        accept="application/pdf"
                        onChange={(event) => {
                          const file = event.target.files[0]
                          setUploadedFiles((files) => ({
                            ...files,
                            [assignment.title]: file ? file.name : '',
                          }))
                        }}
                      />
                      Upload PDF
                    </label>
                    <p className="uploaded-file">
                      {uploadedFiles[assignment.title] || 'No file selected'}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : isTeacher ? (
            <TeacherDashboard
              teacherName={displayName}
              stats={teacherStats}
              onNavigate={handleNavigate}
            />
          ) : (
            <>
              <section className="hero-panel">
                <div>
                  <p className="eyebrow">Learning Management Portal</p>
                  <h1>
                    Welcome back, <span>{displayName}</span>
                  </h1>
                  <p className="hero-text">
                    Track classes, assignments, and course progress from one bright dashboard.
                  </p>
                </div>
                <button
                  className="primary-action"
                  type="button"
                  onClick={() => handleNavigate('Schedule')}
                >
                  View Schedule
                </button>
              </section>

              <section className="dashboard-grid" aria-label="Dashboard stats">
                {stats.map((stat) => (
                  <DashboardCard key={stat.title} title={stat.title} count={stat.count} />
                ))}
              </section>

              <section className="content-section">
                <div className="section-header">
                  <div>
                    <p className="eyebrow">Continue Learning</p>
                    <h2>Current Courses</h2>
                  </div>
                  <button className="secondary-action">Browse All</button>
                </div>

                <div className="course-grid">
                  {courses.map((course) => (
                    <CourseCard
                      key={course.title}
                      title={course.title}
                      instructor={course.instructor}
                      progress={course.progress}
                      onView={() => {
                        setActivePage('Courses')
                        setSelectedCourse(course)
                      }}
                    />
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
