import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/presentation/">
        CURRÍCULUM VITAE
      </Link>
      <Link className="nav-link" to="/presentation/skills">
        Skills and Projects
      </Link>
      <Link className="nav-link" to="/presentation/experience">
        Experience
      </Link>
    </nav>
  );
}

export default NavBar;
