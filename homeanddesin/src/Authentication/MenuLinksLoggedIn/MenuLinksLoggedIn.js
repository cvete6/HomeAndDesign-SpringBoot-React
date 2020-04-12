import React from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import app from "../../firebaseConfig"
import {Link} from "react-router-dom";

function MenuLinksLoggedIn(){
    return(


        <React.Fragment>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to={"/architects"}>ARCHITECTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/projects"}>PROJECTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/projects/calendar"}>CALENDAR</Link>
                </li>
                <li>
                    <Link className="menu-text li-menu-padding" href="#" onClick={() => app.auth().signOut()}>SignOut</Link>
                </li>
            </ul>
        </React.Fragment>

    )
}

export default MenuLinksLoggedIn;