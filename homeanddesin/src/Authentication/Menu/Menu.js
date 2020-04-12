import React, {useContext} from 'react';
import './Menu.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import {AuthContext} from "../../Auth";
import MenuLinksLoggedIn from "../MenuLinksLoggedIn/MenuLinksLoggedIn";
import MenuLinksNotLoggedIn from "../MenuLinksNotLoggedIn/MenuLinksNotLoggedIn";
import {Link} from "react-router-dom";
import  './Menu.css'
function Menu (){

    const {currentUser} = useContext(AuthContext);

    if(currentUser==null)
        return (
<div>
            <div className="d-flex" id="wrapper">

                <div id="page-content-wrapper">

                    <nav className="navbar navbar-expand-md navbar-light fixed-top   " >

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link className="nav-brand" to={"/home"} >
                            <div className="h-50 " >
                                <img  id="logo" src="logo1.jpg" alt="..." className="rounded-circle "></img>
                                <h5 className="d-inline-block pl-3"> Home</h5>
                            </div>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <MenuLinksNotLoggedIn/>
                        </div>
                    </nav>
                </div>

            </div>

</div>



        );
    else return(

        <div>
            <div className="d-flex" id="wrapper">

                <div id="page-content-wrapper">

                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light  " >

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link className="nav-brand" to={"/home"} >
                            <div className="h-50 " >
                                <img  id="logo" src="logo1.jpg" alt="..." className="rounded-circle ">
                                </img>
                            </div>
                            <h5 className="d-inline-block pl-3"> Home</h5>

                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <MenuLinksLoggedIn/>
                        </div>
                    </nav>
                </div>

            </div>

        </div>

    )
}

export default Menu;