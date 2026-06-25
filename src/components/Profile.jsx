import "./Profile.css";

const Profile = ({ profile }) => {
  return (
    <section className="profile-page" aria-label="Student profile">
      <div className="profile-card">
        <img className="profile-photo" src={profile.imageUrl} alt={`${profile.name} profile`} />
        <p className="profile-role">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="profile-course">{profile.course}</p>
      </div>

      <div className="profile-section-grid">
        <div className="profile-info-section">
          <h2>Contact Details</h2>
          <p>
            <span>Phone</span>
            {profile.phone}
          </p>
          <p>
            <span>Email</span>
            {profile.email}
          </p>
        </div>

        <div className="profile-info-section">
          <h2>Academic Details</h2>
          <p>
            <span>Student ID</span>
            {profile.studentId}
          </p>
          <p>
            <span>Batch</span>
            {profile.batch}
          </p>
        </div>

        <div className="profile-info-section">
          <h2>Account Details</h2>
          <p>
            <span>Joined</span>
            {profile.joined}
          </p>
          <p>
            <span>Status</span>
            Active
          </p>
        </div>

        <div className="profile-info-section">
          <h2>Address</h2>
          <p>
            <span>Location</span>
            {profile.address}
          </p>
          <p>
            <span>Portal</span>
            Satish Academy LMS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
