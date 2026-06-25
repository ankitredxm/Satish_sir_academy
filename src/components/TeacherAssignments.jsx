import "./Teacher.css";

const TeacherAssignments = ({ assignments }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Teacher Assignments</p>
          <h2>Assignments and Submissions</h2>
        </div>
        <button className="primary-action" type="button">
          Create Assignment
        </button>
      </div>

      <div className="teacher-table">
        <div className="teacher-table-head assignment-table-head">
          <span>Assignment</span>
          <span>Due Date</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {assignments.map((assignment) => (
          <div className="teacher-table-row assignment-table-row" key={assignment.title}>
            <div>
              <h3>{assignment.title}</h3>
              <p>Created for registered students</p>
            </div>
            <strong>{assignment.dueDate}</strong>
            <span className={`status-pill ${assignment.status.toLowerCase()}`}>
              {assignment.status}
            </span>
            <div className="table-actions">
              <button type="button">Edit</button>
              <button type="button">View Submissions</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeacherAssignments;
