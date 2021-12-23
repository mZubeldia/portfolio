const Projects = () => {
    return ( 
        <main className="main_projects">
      <div className="projects_text">
        <h2 className="page_title">Projects</h2>
        <p className="projects_paragraph">
          Here are some of the projects I have worked on, but you can also check
          my GitHub
          <a className="about_projects_link" href="https://github.com/mZubeldia"
            >repository</a
          >.
        </p>
      </div>

      <section className="projects_section">
        <ul className="projects_list">

          <li className="projects_list_element">
            <article className="card">
              <h3 className="card_title">rick and morty search</h3>
              <nav className="card_nav">
                <ul className="card_nav_list">
                  <li className="list_element">
                    <a className="list_element_link" href="https://github.com/mZubeldia/rick-and-morty-character-search">
                      <i className="fas fa-code"></i>
                    </a>
                  </li>
                  <li className="list_element">
                    <a className="list_element_link" href="https://mzubeldia.github.io/rick-and-morty-character-search/#/">
                      <i className="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img className="card_image" src="./images/rick_morty.png" alt="rick and morty"/>
              <section className="card_technology_section">
                <ul className="card_technology_list">
                  <li className="technology_list_element">react</li>
                  <li className="technology_list_element">js</li>
                  <li className="technology_list_element">sass</li>
                  <li className="technology_list_element">grid</li>
                </ul>
              </section>
            </article>
          </li>

          <li className="projects_list_element">
            <article className="card">
              <h3 className="card_title">gifapp</h3>
              <nav className="card_nav">
                <ul className="card_nav_list">
                  <li className="list_element">
                    <a className="list_element_link" href="https://github.com/mZubeldia/gifExpertApp">
                      <i className="fas fa-code"></i>
                    </a>
                  </li>
                  <li className="list_element">
                    <a className="list_element_link" href="https://mzubeldia.github.io/gifExpertApp/">
                      <i className="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img className="card_image" src="./images/gifapp.png" alt="gifapp"/>
              <section className="card_technology_section">
                <ul className="card_technology_list">
                  <li className="technology_list_element">react</li>
                  <li className="technology_list_element">js</li>
                </ul>
              </section>
            </article>
          </li>

          <li className="projects_list_element">
            <article className="card">
              <h3 className="card_title">series search engine</h3>
              <nav className="card_nav">
                <ul className="card_nav_list">
                  <li className="list_element">
                    <a className="list_element_link" href="https://github.com/mZubeldia/series-search-engine">
                      <i className="fas fa-code"></i>
                    </a>
                  </li>
                  <li className="list_element">
                    <a className="list_element_link" href="https://mzubeldia.github.io/series-search-engine/">
                      <i className="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img className="card_image" src="./images/series-search.png" alt="series engine"/>
              <section className="card_technology_section">
                <ul className="card_technology_list">
                  <li className="technology_list_element">js</li>
                  <li className="technology_list_element">sass</li>
                  <li className="technology_list_element">grid</li>
                </ul>
              </section>
            </article>
          </li>

          <li className="projects_list_element">
            <article className="card">
              <h3 className="card_title">easy delivery</h3>
              <nav className="card_nav">
                <ul className="card_nav_list">
                  <li className="list_element">
                    <a className="list_element_link" href="https://github.com/mZubeldia/easy-delivery">
                      <i className="fas fa-code"></i>
                    </a>
                  </li>
                  <li className="list_element">
                    <a className="list_element_link" href="https://mzubeldia.github.io/easy-delivery/#/">
                      <i className="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img className="card_image" src="./images/easy_delivery.png" alt="easy delivery"/>
              <section className="card_technology_section">
                <ul className="card_technology_list">
                  <li className="technology_list_element">react</li>
                  <li className="technology_list_element">js</li>
                  <li className="technology_list_element">bootstrap</li>
                </ul>
              </section>
            </article>
          </li>

        </ul>
      </section>
    </main>
    );
  };
  
  export default Projects;