import DashboardCard from "./DashboardCard";
import "./Admin.css";

const AdminDashboard = ({ stats }) => {
  return (
    <>
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Admin Dashboard</p>
          <h1>
            Manage <span>Satish Academy</span>
          </h1>
          <p className="hero-text">
            Track students, teachers, courses, enrollments, and reports from one control center.
          </p>
        </div>
      </section>

      <section className="dashboard-grid" aria-label="Admin statistics">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} title={stat.title} count={stat.count} />
        ))}
      </section>
    </>
  );
};

export default AdminDashboard;
