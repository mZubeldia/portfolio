const Header = () => {
  return (
    <header class="header">
      <nav class="header_nav">
        <h1 class="header_title">
          <a href="./index.html">mZubeldia</a>
        </h1>

        <ul class="nav_list">
          <li class="nav_list_element">
            <a class="nav_list_element_link" href="./cv.html">
              CV
            </a>
          </li>
          <li class="nav_list_element">
            <a class="nav_list_element_link" href="./projects.html">
              projects
            </a>
          </li>
          <li class="nav_list_element">
            <a class="nav_list_element_link" href="./contact.html">
              contact
            </a>
          </li>
        </ul>

        <ul class="nav_languages_list header_nav_languages">
          <li class="nav_languages_list_element">
            <a class="languages_element_link" href="">
              ES
            </a>
          </li>

          <li class="nav_languages_list_element">
            <a class="languages_element_link" href="">
              FR
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
