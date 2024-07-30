import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/opeartions";

import { IoLogOut } from "react-icons/io5";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.menuWrapper}>
      <p className={css.welcomeText}>
        👋🏻 <span>username</span>
      </p>
      <button type="button" className={css.btn} onClick={handleLogOut}>
        <IoLogOut color="whitesmoke" size={28} />
      </button>
    </div>
  );
}
