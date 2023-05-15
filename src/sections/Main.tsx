import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVk } from "react-icons/fa";

import "../styles/Main.scss";

export default function Main() {
  return (
    <section id="home">
      <div className="home-content">
        <h1>
          Hi, my name is <span>Kitty</span>
        </h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Yes, you heard correctly, colleagues and friends call me Kitty or Cat,
          meow :3. I am engaged in programming for about 5 years, have good
          skills for frontend-development and web-design. I`m part of the
          development team - RedBread and I`m frontend developer. I also mentor
          new memberships and set up a network team with other developers. I
          take a creative approach to any task, in my work I always maintain the
          high quality of performance of their duties.
        </p>
        <div className="btn-box">
          <a href="#" className="btn btn-fill">
            Hire Me
          </a>
          <a href="#" className="btn btn-outline">
            Let`s talk
          </a>
        </div>
        <div className="home-sci">
          <a className="btn btn-outline" href="#">
            <FaTelegramPlane />
          </a>
          <a className="btn btn-outline" href="#">
            <FaVk />
          </a>
          <a className="btn btn-outline" href="#">
            <FaGithub />
          </a>
        </div>
      </div>
      <div></div>
    </section>
  );
}
