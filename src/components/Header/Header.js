import "./Header.css";
import logo from "../../Assets/Images/logo_movie.png";
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <img className="logo-movie" src={logo} alt="logo" />
    </span>
  );
};

export default Header;
