import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul style={{ listStyle: "none", padding : "0", margin: "0" }}>
        <li>
          <Link to="/Home"></Link>
        </li>
        <li>
          <Link to="Job"></Link>
        </li>
        <li>
          <Link to="/companies"></Link>
        </li>
        <li>
          <Link to="/services"></Link>
        </li>
        <li>
          <Link to="/Dashboard"></Link>
        </li>
      </ul>

      <Outlet />
    </div>

  )
}

export default Nav;
