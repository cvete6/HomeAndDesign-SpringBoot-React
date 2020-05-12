import React from "react";
import StickyFooter from 'react-sticky-footer';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FooterSocials from '../Footer/FooterSocials/FooterSocials';
import {Link} from "react-router-dom";
import './footer.css'
const FooterPage = () => {
    return (
<div  id="footer">
    <MDBFooter color="blue" className="font-small">
    <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            <MDBCol md="6" className="mt-4">
                <h5 className="title pl-4 ">Content </h5>
                <ul>
                    <li className="list-unstyled">
                        <Link  to={"/architects"}>Architect</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link  to={"/projects"}>Projects</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link  to={"/projects/calendar"}>Calendar</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link  to={"/aboutUs"}>About Us</Link>
                    </li>
                </ul>
            </MDBCol>
            <MDBCol md="6">
                <div className={"container-fluid footer-bg pt-3 pb-4"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <FooterSocials/>
                        </div>
                    </div>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="#"> HomeAndDesign.com </a>
        </MDBContainer>
    </div>
</MDBFooter>
</div>
    );
}

export default FooterPage;