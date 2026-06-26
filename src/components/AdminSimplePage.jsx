import "./Admin.css";

const AdminSimplePage = ({ eyebrow, title, text }) => {
  return (
    <section className="content-section admin-simple-page">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};

export default AdminSimplePage;
