import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <aside className="aside">
      <nav className="aside-nav">
        <ul className="aside_nav_list">
          <li className="aside_nav_list_element">
            <a
              className="aside_nav_list_element_link"
              href="https://github.com/mZubeldia"
            >
              <i className="fab fa-github aside-icon"></i>
            </a>
          </li>
          <li className="aside_nav_list_element">
            <a
              className="aside_nav_list_element_link"
              href="https://www.linkedin.com/in/mzubeldia/?locale=en_US"
            >
              <i className="fab fa-linkedin aside-icon"></i>
            </a>
          </li>
          <li className="aside_nav_list_element">
            <a
              className="aside_nav_list_element_link"
              href="https://twitter.com/mzubeldia_?t=UDrBzqSr2B3km6DUkOOtEA&s=09"
            >
              <i className="fab fa-twitter-square aside-icon"></i>
            </a>
          </li>
          <li className="aside_nav_list_element">
            <Link to="/contact" className="aside_nav_list_element_link">
              <i class="fas fa-envelope aside-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SocialMedia;

//
