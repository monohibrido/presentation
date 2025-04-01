import Navbar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Education from "./components/Education";
import SkillsAndProjects from "./SkillsAndProjects";
import Experience from "./Experience";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import "./SkillsAndProjects.css";
import "./Experience.css";
import "./components/NavBar.css";
import "./components/Presentation.css";
import "./components/Education.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Presentation />
              <Education />
            </>
          }
        />

        <Route path="/skills" element={<SkillsAndProjects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
