import React from "react";

function AdminNav(){
    return <React.Fragment>
        <nav class="navbar bg-body-tertiary shadow-sm">
  <div class="container">
    <a href="Home"><i class="bi bi-list" style={{fontSize: 25}}></i></a>
  <i class="bi bi-person-fill-lock me-2" style={{fontSize: 25}}></i>
    </div>
</nav>
    </React.Fragment>
}
export default AdminNav;