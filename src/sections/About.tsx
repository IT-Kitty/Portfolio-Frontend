import { Avatar } from "flowbite-react";

import "../styles/About.scss";

export default function About() {
  return (
    <div id="about" className="section">
      <span className="header">
        About <span className="highlighted">Me</span>
      </span>
      <Avatar
        className="avatar"
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded={true}
      />
      <span className="title highlighted">Frontend Developer!</span>
      <span className="text">
        Меня зовут <span className="highlighted">Кошка</span>. Да, вы не
        ослышались, коллеги и друзья зовут меня{" "}
        <span className="highlighted">Кошка</span>, приятно познакомиться, мяу
        ฅ^•ﻌ•^ฅ
        <br />Я занимаюсь разработкой около 5 лет, имею хорошие навыки{" "}
        <span className="highlighted">frontend-разработки</span> и{" "}
        <span className="highlighted">web-дизайна</span>. Также, я состою в
        команде{" "}
        <a href="https://redbread-team.ru" target="_blank">
          RedBread
        </a>
        , в которой так же занимаю позицию{" "}
        <span className="highlighted">frontend-разработчика</span>, а ещё
        менторю новых мемберов и налаживаю нетворк команды с другими
        разработчиками. Помимо вёрстки, я освоила{" "}
        <span className="highlighted">JavaScript</span> и{" "}
        <span className="highlighted">TypeScript</span>, работаю с библиотеками{" "}
        <span className="highlighted">React JS</span> и{" "}
        <span className="highlighted">React Native</span>, для UI элементов я
        использую такие библиотеки, как <span className="highlighted">MUI</span>
        , <span className="highlighted">UI Kitten</span> и{" "}
        <span className="highlighted">Flowbite</span>. Для дизайна я использую
        инструменты <span className="highlighted">Figma</span> и{" "}
        <span className="highlighted">Photoshop</span>. Долгое время работала
        контент-менеджером и собирала референсы различных сайтов, поэтому смогу
        подобрать стиль сайта и собрать цветовую палитру, подходящую под Ваш
        продукт и{" "}
        <span className="highlighted">привлекательную для пользователей</span>.
        Я креативно подхожу к любой задаче, в работе всегда поддерживаю высокое
        качество выполнения своих обязанностей.
      </span>
    </div>
  );
}
