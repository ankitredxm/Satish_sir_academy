import "./Teacher.css";

const TeacherStudents = ({ students }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Student Management</p>
          <h2>Student Attendance</h2>
        </div>
      </div>

      <div className="teacher-table">
        <div className="teacher-table-head student-table-head">
          <span>Student</span>
          <span>Roll No</span>
          <span>Attendance</span>
          <span>Actions</span>
        </div>

        {students.map((student) => (
          <div className="teacher-table-row student-table-row" key={student.rollNo}>
            <div>
              <h3>{student.name}</h3>
              <p>{student.course}</p>
            </div>
            <strong>{student.rollNo}</strong>
            <span className="attendance-pill">{student.attendance}</span>
            <div className="table-actions">
              <button type="button">View</button>
              <button type="button">Update Attendance</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeacherStudents;
