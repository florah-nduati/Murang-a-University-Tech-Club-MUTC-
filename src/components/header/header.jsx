import "./header.css";
function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <h1 className="logo-text">Murang'a University Tech Club (MUTC)</h1>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-item">
            {" "}
            <a href="#" className="navigation-link">
              home
            </a>
          </li>
          <li className="navigation-item">
            {" "}
            <a href="#" className="navigation-link">
              about
            </a>
          </li>
          <li className="navigation-item">
            {" "}
            <a href="#" className="navigation-link">
              leadership
            </a>
          </li>
          <li className="navigation-item">
            {" "}
            <a href="#" className="navigation-link">
              tracks
            </a>
          </li>
          <li className="navigation-item">
            {" "}
            <a href="#" className="navigation-link">
              events
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <HeaderNavigation />
    </header>
  );
}
export default Header;
