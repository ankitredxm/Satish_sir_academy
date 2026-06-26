import "./Admin.css";

const AdminTeachers = ({ teachers }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Manage Teachers</p>
          <h2>Teacher Table</h2>
        </div>
        <button className="primary-action" type="button">
          Add Teacher
        </button>
      </div>

      <div className="admin-table">
        <div className="admin-table-head admin-teacher-grid">
          <span>Name</span>
          <span>Department</span>
          <span>Actions</span>
        </div>

        {teachers.map((teacher) => (
          <div className="admin-table-row admin-teacher-grid" key={teacher.name}>
            <h3>{teacher.name}</h3>
            <p>{teacher.department}</p>
            <div className="admin-actions">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminTeachers;
