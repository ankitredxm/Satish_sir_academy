import { useState } from "react";
import "./Sidebar.css";

const studentMenuItems = ["Dashboard", "Courses", "Assignments", "Schedule", "Profile", "Logout"];
const teacherMenuItems = ["Dashboard", "Courses", "Students", "Assignments", "Profile", "Logout"];
const adminMenuItems = ["Dashboard", "Students", "Teachers", "Courses", "Reports", "Settings", "Logout"];

const Sidebar = ({ activePage, onNavigate, role, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = role === "admin"
    ? adminMenuItems
    : role === "teacher"
      ? teacherMenuItems
      : studentMenuItems;

  const handleNavigate = (item) => {
    if (item === "Logout") {
      onLogout();
      return;
    }

    onNavigate(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <aside className="sidebar">
      <div className="mobile-sidebar">
        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{activePage}</span>
        </button>

        <div className={`mobile-menu-panel ${isMobileMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <button
              className={activePage === item ? "active" : ""}
              key={item}
              type="button"
              onClick={() => handleNavigate(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            <button
              className={activePage === item ? "active" : ""}
              type="button"
              onClick={() => handleNavigate(item)}
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
