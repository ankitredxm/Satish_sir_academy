import "./Sidebar.css";

const studentMenuItems = ["Dashboard", "Courses", "Assignments", "Schedule", "Profile", "Logout"];
const teacherMenuItems = ["Dashboard", "Courses", "Students", "Assignments", "Profile", "Logout"];

const Sidebar = ({ activePage, onNavigate, role, onLogout }) => {
  const menuItems = role === "teacher" ? teacherMenuItems : studentMenuItems;

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            <button
              className={activePage === item ? "active" : ""}
              type="button"
              onClick={() => {
                if (item === "Logout") {
                  onLogout();
                  return;
                }

                onNavigate(item);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
