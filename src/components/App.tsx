import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Main from "../sections/Main";
import Skills from "../sections/Skills";
import Navigation from "./NavBar";

import "../styles/App.scss";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Main></Main>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
