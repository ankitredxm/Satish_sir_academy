import "./Schedule.css";

const Schedule = ({ classes }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Class Schedule</p>
          <h2>Today&apos;s Learning Rail</h2>
        </div>
      </div>

      <div className="schedule-rail" aria-label="Class schedule timeline">
        {classes.map((classItem, index) => (
          <div className="rail-station" key={classItem.title}>
            <div className="station-marker">
              <span>{index + 1}</span>
            </div>

            <div className="station-card">
              <p className="station-time">{classItem.time}</p>
              <h3>{classItem.title}</h3>
              <p>Instructor: {classItem.instructor}</p>
              <p>Platform: {classItem.platform}</p>
              <span className={`station-status ${classItem.status.toLowerCase()}`}>
                {classItem.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
