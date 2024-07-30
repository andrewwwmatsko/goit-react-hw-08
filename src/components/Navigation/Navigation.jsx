import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      {isLoggedin && (
        <Link to="/contacts" className={css.link}>
          Contacts
        </Link>
      )}
    </nav>
  );
}
