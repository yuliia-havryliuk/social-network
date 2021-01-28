import s from "./Honey.module.css";
import { NavLink } from "react-router-dom";
const Honey = () => {
  return (
    <NavLink to="/profile">
      <img
        className={s.honey}
        src="https://img1.picmix.com/output/stamp/normal/2/5/0/2/1262052_e625d.png"
      />
    </NavLink>
  );
};
export default Honey;
