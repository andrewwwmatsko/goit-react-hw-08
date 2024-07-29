import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Header.module.css";

export default function Header() {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.linksWrapper}>
        <Link to="/" className={css.link}>
          Home
        </Link>
        {isLoggedin && (
          <Link to="/contacts" className={css.link}>
            Contacts
          </Link>
        )}
      </div>

      {!isLoggedin && (
        <div className={css.authWrapper}>
          <Link to="/register" className={css.link}>
            Register
          </Link>
          <Link to="/login" className={css.link}>
            Log in
          </Link>
        </div>
      )}
    </header>
  );
}
