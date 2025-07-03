import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-sport">
        <img src={logo} className="logo" alt="SportSee Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Profil</a></li>
          <li><a href="#">Réglages</a></li>
          <li><a href="#">Communauté</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;