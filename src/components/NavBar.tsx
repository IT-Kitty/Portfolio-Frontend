import { useState } from "react";
import { Navbar } from "flowbite-react";

import "../styles/App.scss";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Navbar fluid={true} rounded={true} className="navbar">
      <Navbar.Brand to="#main">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          IT_Kitty
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="#main"
          onClick={() => setActiveTab(0)}
          active={activeTab === 0}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#about"
          onClick={() => setActiveTab(1)}
          active={activeTab === 1}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="#experience"
          onClick={() => setActiveTab(2)}
          active={activeTab === 2}
        >
          Experience
        </Navbar.Link>
        <Navbar.Link
          href="#skills"
          onClick={() => setActiveTab(3)}
          active={activeTab === 3}
        >
          Skills
        </Navbar.Link>
        <Navbar.Link
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
