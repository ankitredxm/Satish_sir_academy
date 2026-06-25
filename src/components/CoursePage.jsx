import { useState } from "react";
import CourseCard from "./CourseCard";
import "./CoursePage.css";

const CoursePage = ({ courses, selectedCourse, onSelectCourse, onBack }) => {
  const [showRecordedVideo, setShowRecordedVideo] = useState(false);

  const handleSelectCourse = (course) => {
    setShowRecordedVideo(false);
    onSelectCourse(course);
  };

  const handleBack = () => {
    setShowRecordedVideo(false);
    onBack();
  };

  if (!selectedCourse) {
    return (
      <section className="content-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Registered Courses</p>
            <h2>My Courses</h2>
          </div>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
              onView={() => handleSelectCourse(course)}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Course Preview</p>
          <h2>{selectedCourse.title}</h2>
        </div>
        <button className="secondary-action" type="button" onClick={handleBack}>
          Back to Courses
        </button>
      </div>

      <div className="course-preview-box">
        <div className="course-preview-media">
          {showRecordedVideo ? (
            <video controls src={selectedCourse.videoUrl}>
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="video-preview-card">
              <span>Recorded Class Preview</span>
              <h3>{selectedCourse.title}</h3>
              <p>Choose live class or play the recorded lecture.</p>
            </div>
          )}
        </div>

        <div className="course-preview-details">
          <span className="course-badge">Course Details</span>
          <h3>{selectedCourse.title}</h3>
          <p>Instructor: {selectedCourse.instructor}</p>
          <p>Progress: {selectedCourse.progress}% completed</p>
          <p>Live Class: Today, 6:00 PM</p>
          <p>Recorded Video: Introduction lesson available</p>

          <div className="course-action-row">
            <button className="live-button" type="button">
              Join Live
            </button>
            <button
              className="recorded-button"
              type="button"
              onClick={() => setShowRecordedVideo(true)}
            >
              Play Recorded
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
