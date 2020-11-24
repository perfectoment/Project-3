import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Logout
      </NavLink>

    </nav>
  );
}
export default Header;