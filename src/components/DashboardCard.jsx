import "./DashboardCard.css";

const DashboardCard = ({ title, count }) => {
  return (
    <div className="dashboard-card">
      <h2>{count}</h2>
      <p>{title}</p>
    </div>
  );
};

export default DashboardCard;
