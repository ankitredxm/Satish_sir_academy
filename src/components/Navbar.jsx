import "./Navbar.css";

const Navbar = ({ user, onLogout }) => {
  const initial = user.username.charAt(0).toUpperCase();

  return (
    <nav className="navbar">
      <h2>Satish Academy</h2>

      <div className="nav-right">
        <div className="user-greeting">
          <span className="user-avatar">{initial}</span>
          <div>
            <p>Welcome back</p>
            <strong>{user.username}</strong>
          </div>
        </div>
        <button type="button" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
