import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import About from "./About";
import ProAndSki from "./ProAndSki";
import Experience from "./Experience";
import CVModal from "./CVModal";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const nodeRef = useRef(null);

  const renderSection = () => {
    if (activeSection === "about") return <About />;
    if (activeSection === "pro_and_ski") return <ProAndSki />;
    if (activeSection === "experience") return <Experience />;
    return null;
  };

  return (
    <div>
      <Navbar onNavigate={setActiveSection} />
      <SwitchTransition>
        <CSSTransition
          key={activeSection}
          nodeRef={nodeRef}
          timeout={500}
          classNames="fade"
        >
          <div ref={nodeRef}>{renderSection()}</div>
        </CSSTransition>
      </SwitchTransition>
      <CVModal />
    </div>
  );
}

export default App;
