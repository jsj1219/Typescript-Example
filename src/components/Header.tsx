import { NavLink } from "react-router-dom";
import NavStyles from "@styles/Header.module.css";

function Header() {
  return (
    <nav>
      <ul className={NavStyles.nav_container}>
        <li className={NavStyles.nav_item}><NavLink to="/counter">Counter</NavLink></li>
        <li className={NavStyles.nav_item}><NavLink to="/todolist">TodoList</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;