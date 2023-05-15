import { Navbar } from "flowbite-react";
import { useState } from "react";

import "../styles/NavBar.scss";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Navbar fluid={true} rounded={true} className="navbar">
      <Navbar.Brand to="#main">
        <span className="logo">IT_Kitty</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className={`link ${activeTab === 0 ? "active" : ""}`}
          href="#main"
          onClick={() => setActiveTab(0)}
          active={activeTab === 0}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className={`link ${activeTab === 1 ? "active" : ""}`}
          href="#about"
          onClick={() => setActiveTab(1)}
          active={activeTab === 1}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          className={`link ${activeTab === 2 ? "active" : ""}`}
          href="#experience"
          onClick={() => setActiveTab(2)}
          active={activeTab === 2}
        >
          Experience
        </Navbar.Link>
        <Navbar.Link
          className={`link ${activeTab === 3 ? "active" : ""}`}
          href="#skills"
          onClick={() => setActiveTab(3)}
          active={activeTab === 3}
        >
          Skills
        </Navbar.Link>
        <Navbar.Link
          className={`link ${activeTab === 4 ? "active" : ""}`}
          href="#contact"
          onClick={() => setActiveTab(4)}
          active={activeTab === 4}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
