import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <h4 className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </h4>
      <h4 className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </h4>
      <h4 className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </h4>
      <h4 className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </h4>
      <h4 className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Setting</NavLink>
      </h4>
    </nav>
  );
};
export default Navigation;
