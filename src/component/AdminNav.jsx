import React from "react";
import { Link } from "react-router-dom";
function AdminNav(){
    return <React.Fragment>
        <nav class="navbar bg-body-tertiary shadow-sm">
  <div class="container">
    <Link to="/"><i class="bi bi-list" style={{fontSize: 25}}></i></Link>
  <i class="bi bi-person-fill-lock me-2" style={{fontSize: 25}}></i>
    </div>
</nav>
    </React.Fragment>
}
export default AdminNav;