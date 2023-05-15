import About from "../sections/About";
import Contacts from "../sections/Contacts";
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
      <Contacts></Contacts>
    </div>
  );
}

export default App;
