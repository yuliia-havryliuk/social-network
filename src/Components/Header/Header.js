import s from "./Header.module.css";
import Honey from "./Honey";
import Compass from "./Compass";
const Header = () => {
  return (
    <header className={s.header}>
      <Compass />
      <Honey />
    </header>
  );
};
export default Header;
