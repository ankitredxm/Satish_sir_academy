import "./Admin.css";

const AdminStudents = ({ students }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Manage Students</p>
          <h2>Student Table</h2>
        </div>
        <button className="primary-action" type="button">
          Add Student
        </button>
      </div>

      <div className="admin-table">
        <div className="admin-table-head admin-student-grid">
          <span>Name</span>
          <span>Email</span>
          <span>Course</span>
          <span>Actions</span>
        </div>

        {students.map((student) => (
          <div className="admin-table-row admin-student-grid" key={student.email}>
            <h3>{student.name}</h3>
            <p>{student.email}</p>
            <p>{student.course}</p>
            <div className="admin-actions">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
              <button type="button">View</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminStudents;
