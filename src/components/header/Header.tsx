import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Information Protection Labs</h1>
      <nav>
        <Link to="/first">
          <button className={styles.navButton}>First</button>
        </Link>
        <Link to="/second">
          <button className={styles.navButton}>Second</button>
        </Link>
        <Link to="/third">
          <button className={styles.navButton}>Third</button>
        </Link>
        <Link to="/fourth">
          <button className={styles.navButton}>Fourth</button>
        </Link>
        <Link to="/fifth">
          <button className={styles.navButton}>Fifth</button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
