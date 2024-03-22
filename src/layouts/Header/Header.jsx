import "./Header.scss"

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4">
      <div className="navMenu">
        <div>
          <h1 className="logo">BiletNoktası</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a>Yardım</a>
            </li>
            <li>
              <a>Üye Ol</a>
            </li>
            <li>
              <a>Giriş Yap</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
