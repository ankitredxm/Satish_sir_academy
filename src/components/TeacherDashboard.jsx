import DashboardCard from "./DashboardCard";
import "./Teacher.css";

const TeacherDashboard = ({ teacherName, stats, onNavigate }) => {
  const actions = [
    { label: "Create Course", page: "Courses" },
    { label: "Upload Material", page: "Courses" },
    { label: "Create Assignment", page: "Assignments" },
    { label: "View Submissions", page: "Assignments" },
  ];

  return (
    <>
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Teacher Dashboard</p>
          <h1>
            Welcome back, <span>{teacherName}</span>
          </h1>
          <p className="hero-text">
            Manage your courses, students, assignments, and submissions from one workspace.
          </p>
        </div>
      </section>

      <section className="dashboard-grid" aria-label="Teacher statistics">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} title={stat.title} count={stat.count} />
        ))}
      </section>

      <section className="content-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Actions</p>
            <h2>Quick Teacher Tools</h2>
          </div>
        </div>

        <div className="teacher-action-grid">
          {actions.map((action) => (
            <button
              className="teacher-action-card"
              key={action.label}
              type="button"
              onClick={() => onNavigate(action.page)}
            >
              {action.label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeacherDashboard;
