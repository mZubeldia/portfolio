const Curriculum = () => {
  return (
    <main className="main_about">
      <h2 className="main_about_title page_title">cv</h2>

      <div className="wrapper_about_left">
        <section className="about_section languages">
          <h3 className="about_subtitle">languages</h3>
          <ul className="languages_list">
            <li className="languages_list_element">
              <img
                className="languages_image icon"
                src="./assets/images/spanish.png"
                alt="spanish flag"
              />
            </li>
            <li className="languages_list_element">
              <img
                className="languages_image icon"
                src="./assets/images/english.png"
                alt="uk flag"
              />
            </li>
            <li className="languages_list_element">
              <img
                className="languages_image icon"
                src="./assets/images/french.png"
                alt="french flag"
              />
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
                  src="./assets/images/html5.png"
                  alt="html logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/css3.png"
                  alt="css logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/js.png"
                  alt="javascript logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/bootstrap.png"
                  alt="bootstrap logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/sass.png"
                  alt="sass logo"
                />
              </li>
            </div>
            <div className="skills_wrapper2">
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/zeplin.png"
                  alt="zeplin logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/react.png"
                  alt="react logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/gulp.png"
                  alt="gulp logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/nodejs.png"
                  alt="nodejs logo"
                />
              </li>
              <li className="skills_list_element">
                <img
                  className="icon"
                  src="./assets/images/sqlite.png"
                  alt="sqlite logo"
                />
              </li>
            </div>
          </ul>
        </section>
      </div>
      <div className="wrapper_about_right">
        <section className="about_section experience">
          <h3 className="about_subtitle">experience</h3>
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
            <a className="about_projects_link" href="./projects.html">
              here
            </a>{" "}
            and <a href="https://github.com/mZubeldia?tab=repositories">here</a>
          </p>
        </section>
        <section className="about_section education">
          <h3 className="about_subtitle">education</h3>
          <ul>
            <li>Frontend Development Bootcamp, Adalab</li>
            <li>Translation and Interpreting Degree</li>
            <li>Mobility program, France</li>
          </ul>
        </section>
      </div>
    </main>
  );
};
export default Curriculum;