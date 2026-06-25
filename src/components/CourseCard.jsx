import "./CourseCard.css";

const CourseCard = ({ title, instructor, progress, onView }) => {
  return (
    <div className="course-card">
      <span className="course-badge">Course</span>
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      <div className="course-progress">
        <div className="course-progress-header">
          <span>Progress</span>
          <strong>{progress}%</strong>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button type="button" onClick={onView}>View Course</button>
    </div>
  );
};

export default CourseCard;
