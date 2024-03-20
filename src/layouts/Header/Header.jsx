import "./Header.scss"

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="logo" >BiletNoktası</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="javascript:;">Yardım</a>
            </li>
            <li>
              <a href="javascript:;">Üye Ol</a>
            </li>
            <li>
              <a href="javascript:;">Giriş Yap</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
