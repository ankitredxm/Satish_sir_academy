import "./Admin.css";

const AdminCourses = ({ courses }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Manage Courses</p>
          <h2>Course Table</h2>
        </div>
        <button className="primary-action" type="button">
          Create Course
        </button>
      </div>

      <div className="admin-table">
        <div className="admin-table-head admin-course-grid">
          <span>Course</span>
          <span>Teacher</span>
          <span>Students</span>
          <span>Actions</span>
        </div>

        {courses.map((course) => (
          <div className="admin-table-row admin-course-grid" key={course.title}>
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <strong>{course.students}</strong>
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

export default AdminCourses;
