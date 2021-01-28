import s from "./Compass.module.css";
import {NavLink} from "react-router-dom";
const Compass = () => {
  return (
    <NavLink to="/profile">
      <img
        className={s.compass}
        src="https://img.icons8.com/ios/452/safari.png"
      />
    </NavLink>
  );
};
export default Compass;
