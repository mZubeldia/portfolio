import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <h1 className="header_title">
          <Link to="./">mZubeldia</Link>
        </h1>

        <ul className="nav_list">
          <li className="nav_list_element">
          <Link to="/curriculum" className="nav_list_element_link">cv</Link>
          </li>
          <li className="nav_list_element">
          <Link to="/projects" className="nav_list_element_link">projects</Link>
          </li>
          <li className="nav_list_element">
          <Link to="/contact" className="nav_list_element_link">contact</Link>
          </li>
        </ul>

        <ul className="nav_languages_list header_nav_languages">
          <li className="nav_languages_list_element">
            <a className="languages_element_link" href="">
              ES
            </a>
          </li>

          <li className="nav_languages_list_element">
            <a className="languages_element_link" href="">
              FR
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
