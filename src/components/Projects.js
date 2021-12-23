const Projects = () => {
    return ( 
        <main class="main_projects">
      <div class="projects_text">
        <h2 class="page_title">Projects</h2>
        <p class="projects_paragraph">
          Here are some of the projects I have worked on, but you can also check
          my GitHub
          <a class="about_projects_link" href="https://github.com/mZubeldia"
            >repository</a
          >.
        </p>
      </div>

      <section class="projects_section">
        <ul class="projects_list">

          <li class="projects_list_element">
            <article class="card">
              <h3 class="card_title">rick and morty search</h3>
              <nav class="card_nav">
                <ul class="card_nav_list">
                  <li class="list_element">
                    <a class="list_element_link" href="https://github.com/mZubeldia/rick-and-morty-character-search">
                      <i class="fas fa-code"></i>
                    </a>
                  </li>
                  <li class="list_element">
                    <a class="list_element_link" href="https://mzubeldia.github.io/rick-and-morty-character-search/#/">
                      <i class="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img class="card_image" src="./images/rick_morty.png" alt="rick and morty"/>
              <section class="card_technology_section">
                <ul class="card_technology_list">
                  <li class="technology_list_element">react</li>
                  <li class="technology_list_element">js</li>
                  <li class="technology_list_element">sass</li>
                  <li class="technology_list_element">grid</li>
                </ul>
              </section>
            </article>
          </li>

          <li class="projects_list_element">
            <article class="card">
              <h3 class="card_title">gifapp</h3>
              <nav class="card_nav">
                <ul class="card_nav_list">
                  <li class="list_element">
                    <a class="list_element_link" href="https://github.com/mZubeldia/gifExpertApp">
                      <i class="fas fa-code"></i>
                    </a>
                  </li>
                  <li class="list_element">
                    <a class="list_element_link" href="https://mzubeldia.github.io/gifExpertApp/">
                      <i class="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img class="card_image" src="./images/gifapp.png" alt="gifapp"/>
              <section class="card_technology_section">
                <ul class="card_technology_list">
                  <li class="technology_list_element">react</li>
                  <li class="technology_list_element">js</li>
                </ul>
              </section>
            </article>
          </li>

          <li class="projects_list_element">
            <article class="card">
              <h3 class="card_title">series search engine</h3>
              <nav class="card_nav">
                <ul class="card_nav_list">
                  <li class="list_element">
                    <a class="list_element_link" href="https://github.com/mZubeldia/series-search-engine">
                      <i class="fas fa-code"></i>
                    </a>
                  </li>
                  <li class="list_element">
                    <a class="list_element_link" href="https://mzubeldia.github.io/series-search-engine/">
                      <i class="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img class="card_image" src="./images/series-search.png" alt="series engine"/>
              <section class="card_technology_section">
                <ul class="card_technology_list">
                  <li class="technology_list_element">js</li>
                  <li class="technology_list_element">sass</li>
                  <li class="technology_list_element">grid</li>
                </ul>
              </section>
            </article>
          </li>

          <li class="projects_list_element">
            <article class="card">
              <h3 class="card_title">easy delivery</h3>
              <nav class="card_nav">
                <ul class="card_nav_list">
                  <li class="list_element">
                    <a class="list_element_link" href="https://github.com/mZubeldia/easy-delivery">
                      <i class="fas fa-code"></i>
                    </a>
                  </li>
                  <li class="list_element">
                    <a class="list_element_link" href="https://mzubeldia.github.io/easy-delivery/#/">
                      <i class="fas fa-laptop"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <img class="card_image" src="./images/easy_delivery.png" alt="easy delivery"/>
              <section class="card_technology_section">
                <ul class="card_technology_list">
                  <li class="technology_list_element">react</li>
                  <li class="technology_list_element">js</li>
                  <li class="technology_list_element">bootstrap</li>
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