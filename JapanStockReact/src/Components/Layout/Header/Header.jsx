import Logo from "../../UI/Logo/Logo";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Btn from "../../UI/Button/Btn";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <Link to="/">
          <Logo />
        </Link>
        <SearchBar />
        <div className={styles.actions}>
          <div>
            <span>
              <a href="usecases">Use Cases</a>
            </span>
            <span>
              <a href="about">About</a>
            </span>
            <span>
              <a href="blog">Blog</a>
            </span>
          </div>
          <Btn content="+ Submit" />
          <div className={styles.avatar}>
            <img src="src\assets\avatar.jpg"></img>
            <img
              className={styles.chevron}
              src="https://svgur.com/i/vFx.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
