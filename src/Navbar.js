function Navbar({ onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#cvModal"
        >
          {" "}
          Mi CV{" "}
        </a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => onNavigate("about")}
            >
              About me
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => onNavigate("pro_and_ski")}
            >
              Projects & Skills
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => onNavigate("experience")}
            >
              Experience
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
