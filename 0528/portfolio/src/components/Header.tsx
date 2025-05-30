import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header>
      <div className="inner">
        <Link to="/">
          <h1 className="logo">LOGO</h1>
        </Link>

        <nav>
          <ul className="main-menu">
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/skill">skill</Link>
            </li>
            <li>
              {isLoggedIn ? (
                <button onClick={logout}>로그아웃</button>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
