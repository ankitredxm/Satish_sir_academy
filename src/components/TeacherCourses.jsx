import "./Teacher.css";

const TeacherCourses = ({ courses }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Course Management</p>
          <h2>Course List</h2>
        </div>
        <button className="primary-action" type="button">
          Create New Course
        </button>
      </div>

      <div className="teacher-table">
        <div className="teacher-table-head">
          <span>Course</span>
          <span>Students</span>
          <span>Actions</span>
        </div>

        {courses.map((course) => (
          <div className="teacher-table-row" key={course.title}>
            <div>
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
            </div>
            <strong>{course.students}</strong>
            <div className="table-actions">
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

export default TeacherCourses;
