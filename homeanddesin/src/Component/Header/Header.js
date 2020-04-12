import React, {useState,useEffect} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import  './HeaderCss.css';
import Home from '../Home/Home';
const Header = (props) => {

    return (<div>
            <div className="d-flex" id="wrapper">

                <div id="page-content-wrapper">

                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light  " >

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                            <Link className="nav-brand" to={"/home"} >
                                <div className="h-50 " >
                                    <img  id="logo" src="logo1.jpg" alt="..." className="rounded-circle "></img>
                                </div>
                            </Link>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        More...
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">About Us</a>
                                        <a className="dropdown-item" href="#">Contact</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        </div>

    )
}
export default Header;
/* <header>
            <nav className="navbar navbar-expand-md  navbar-fixed ">
                <Link className="nav-brand" to={"/"}>Home</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto  justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/architects"}>ARCHITECTS</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/projects"}>PROJECTS</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <a className="btn btn-outline-info my-2 my-sm-0" href="#">Login</a>
                    </form>
                </div>
            </nav>
        </header>*/

