import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar-nav" id="navbar-nav" style={styles.nav}>
      <h2 className="palesz-title" id="palesz-title">
        Pálesz
      </h2>
      <Link id="link" to="/">
        Home
      </Link>
      <Link id="link" to="/Products">
        Products
      </Link>
      <Link id="link" to="/Contact">
        Contact
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#8c8758",
  },

  links: {
    display: "flex",
    gap: "1rem",
  },
};

export default Navbar;
