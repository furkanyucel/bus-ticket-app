import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4">
      <div className="navMenu">
        <div>
          <Link to="/" className="logo">
            BiletNoktası
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Yardım</a>
            </li>
            <li>
              <a href="#">Üye Ol</a>
            </li>
            <li>
              <a href="#">Giriş Yap</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
