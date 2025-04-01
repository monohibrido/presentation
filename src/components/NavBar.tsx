import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/">
        CURRÍCULUM VITAE
      </Link>
      <Link className="nav-link" to="/skills">
        Skills and Projects
      </Link>
      <Link className="nav-link" to="/experience">
        Experience
      </Link>
    </nav>
  );
}

export default NavBar;
