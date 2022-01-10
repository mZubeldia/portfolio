import SocialMedia from "./SocialMedia";

const Curriculum = () => {
  return (
    <main className="main_about">
      <SocialMedia />
      <h2 className="main_about_title page_title">cv</h2>

      <div className="wrapper_about_left">
        <section className="about_section languages">
          <h3 className="about_subtitle">languages</h3>
          <ul className="languages_list">
            <li className="languages_list_element">
              <div className="language-element-wrapper">
                <img
                  className="languages_image icon-language"
                  src="./images/spanish.png"
                  alt="spanish flag"
                />
                <p>Native</p>
              </div>
            </li>
            <li className="languages_list_element">
              <div className="language-element-wrapper">
                <img
                  className="languages_image icon-language"
                  src="./images/english.png"
                  alt="uk flag"
                />
                <p>Fluent</p>
              </div>
            </li>
            <li className="languages_list_element">
              <div className="language-element-wrapper">
                <img
                  className="languages_image icon-language"
                  src="/images/french.png"
                  alt="french flag"
                />
                <p>Proficient</p>
              </div>
            </li>
          </ul>
        </section>
        <section className="about_section profile">
          <h3 className="about_subtitle">profile</h3>
          <p className="profile-paragraph">
            I am a fast and adaptable learner and am passionate about developing
            my skills. For this reason, after several years experience working
            in the Tourism industry, I have decided to reinvent myself as a
            Frontend Developer.
          </p>
          <p className="profile-paragraph">
            In my free time, I love exercising and exploring new places,
            especially if it gives me the opportunity to try out the local food!
          </p>
        </section>
        <section className="about_section skills">
          <h3 className="about_subtitle">skills</h3>
          <ul className="skills_list">
            <div className="skilss_wrapper">
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./images/html5.png"
                  alt="html logo"
                />
                <p className="skill-element-text">HTML5</p>
              </li>
              <li className="skills_list_element">
                <img className="icon" src="./images/css3.png" alt="css logo" />
                <p className="skill-element-text">CSS3</p>
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./images/js.png"
                  alt="javascript logo"
                />
                <p className="skill-element-text">JS</p>
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./images/bootstrap.png"
                  alt="bootstrap logo"
                />
                <p className="skill-element-text">Bootstrap</p>
              </li>
              <li className="skills_list_element">
                <img className="icon" src="./images/sass.png" alt="sass logo" />
              </li>
              <p className="skill-element-text">SASS</p>
            </div>
            <div className="skills_wrapper2">
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./images/zeplin.png"
                  alt="zeplin logo"
                />
                <p className="skill-element-text">Zeplin</p>
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./images/react.png"
                  alt="react logo"
                />
                <p className="skill-element-text">React</p>
              </li>
              <li className="skills_list_element">
                <img className="icon" src="./images/gulp.png" alt="gulp logo" />
                <p className="skill-element-text">Gulp</p>
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./images/nodejs.png"
                  alt="nodejs logo"
                />
                <p className="skill-element-text">NodeJS</p>
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./images/sqlite.png"
                  alt="sqlite logo"
                />
                <p className="skill-element-text">SQLite</p>
              </li>
            </div>
          </ul>
        </section>
      </div>
      <div className="wrapper_about_right">
        <section className="about_section experience">
          <h3 className="about_subtitle">experience</h3>
          <h4 className="experience_title">
            Jartura Games
          </h4>
          <h5 className="experience_subtitle">december 2021 - now</h5>
          <h4 className="experience_title">
            Frontend Development Bootcamp, Adalab
          </h4>
          <h5 className="experience_subtitle">april 2021 - july 2021</h5>
          <ul>
            <li>Web layout, HTML5, CSS3</li>
            <li>Programming, JS, React </li>
            <li>Version control, Git</li>
            <li>Third parties web services, APIs REST</li>
            <li>Agile work philosophy, Scrum</li>
          </ul>
          <h4 className="experience_title">
            Carlson WagonlitTravel, travel consultant
          </h4>
          <h5 className="experience_subtitle">august 2018 - april 2021</h5>
          <h4 className="experience_title">Sitel, airline customer service</h4>
          <h5 className="experience_subtitle">june 2018 - august 2018</h5>
          <h4 className="experience_title">
            Spanish teacher in Secondary School in Belgium
          </h4>
          <h5 className="experience_subtitle">october 2016 - may 2017</h5>
        </section>
        <section className="about_section projects">
          <h3 className="about_subtitle">projects</h3>
          <p>
            You can check out my projects{" "}
            <a className="about_projects_link" href="./projects">
              here
            </a>{" "}
            and{" "}
            <a
              className="about_projects_link"
              href="https://github.com/mZubeldia?tab=repositories"
            >
              here
            </a>
          </p>
        </section>
        <section className="about_section education">
          <h3 className="about_subtitle">education</h3>
          <ul>
            <li>
              <h4 className="experience_title">
                Frontend Development Bootcamp, Adalab
              </h4>
              <p className="experience_subtitle">April 2021 - July 2021</p>
            </li>
            <li>
              <h4 className="experience_title">
                Translation and Interpreting Degree
              </h4>
              <p className="experience_subtitle">2012 - 2017</p>
            </li>
            <li>
              <h4 className="experience_title">Mobility program, France</h4>
              <p className="experience_subtitle">2013 - 2014</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};
export default Curriculum;
